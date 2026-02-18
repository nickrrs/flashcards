"use client";

import { useState, useEffect, useRef } from "react";

interface UseTypewriterTextOptions {
    text: string;
    speed?: number;
    eraseSpeed?: number;
}

export function useTypewriterText({
    text,
    speed = 30,
    eraseSpeed = 15,
}: UseTypewriterTextOptions) {
    const [displayText, setDisplayText] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isHoveredRef = useRef(false);
    const hasTriggeredRef = useRef(false);
    const [isMobile, setIsMobile] = useState(false);
    
    // Criar nosso próprio observer para usar o containerRef
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Observer para inView no mobile
    useEffect(() => {
        if (!isMobile) return;
        
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasTriggeredRef.current) {
                        setIsInView(true);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: "0px",
            }
        );

        observer.observe(container);

        return () => {
            observer.disconnect();
        };
    }, [isMobile]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // No mobile, usar inView
        if (isMobile) {
            if (isInView && !hasTriggeredRef.current) {
                hasTriggeredRef.current = true;
                isHoveredRef.current = true;
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setDisplayText("");

                let index = 0;
                const typeText = () => {
                    if (index < text.length) {
                        setDisplayText(text.slice(0, index + 1));
                        index++;
                        timeoutRef.current = setTimeout(typeText, speed);
                    }
                };
                typeText();
            }
            return;
        }

        // No desktop, usar hover
        const handleMouseEnter = () => {
            isHoveredRef.current = true;
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setDisplayText("");

            let index = 0;
            const typeText = () => {
                if (index < text.length && isHoveredRef.current) {
                    setDisplayText(text.slice(0, index + 1));
                    index++;
                    timeoutRef.current = setTimeout(typeText, speed);
                }
            };
            typeText();
        };

        const handleMouseLeave = () => {
            isHoveredRef.current = false;
            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            const eraseText = () => {
                setDisplayText(prev => {
                    if (prev.length > 0) {
                        timeoutRef.current = setTimeout(eraseText, eraseSpeed);
                        return prev.slice(0, -1);
                    }
                    return prev;
                });
            };

            eraseText();
        };

        const findGroupParent = (element: HTMLElement | null): HTMLElement | null => {
            if (!element) return null;
            if (element.classList.contains("group")) return element;
            return findGroupParent(element.parentElement);
        };

        const groupParent = findGroupParent(container);
        if (groupParent) {
            groupParent.addEventListener("mouseenter", handleMouseEnter);
            groupParent.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (groupParent) {
                groupParent.removeEventListener("mouseenter", handleMouseEnter);
                groupParent.removeEventListener("mouseleave", handleMouseLeave);
            }
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [text, speed, eraseSpeed, isMobile, isInView]);

    return {
        displayText,
        containerRef,
    };
}
