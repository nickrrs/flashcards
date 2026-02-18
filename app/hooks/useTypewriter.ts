"use client";

import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
    title: string;
    description: string;
    titleSpeed?: number;
    descriptionSpeed?: number;
    eraseSpeed?: number;
}

interface UseTypewriterReturn {
    titleText: string;
    descriptionText: string;
    containerRef: React.RefObject<HTMLDivElement | null>;
}

export function useTypewriter({
    title,
    description,
    titleSpeed = 40,
    descriptionSpeed = 30,
    eraseSpeed = 20,
}: UseTypewriterOptions): UseTypewriterReturn {
    const [titleText, setTitleText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const titleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const descriptionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const eraseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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

                if (titleTimeoutRef.current) clearTimeout(titleTimeoutRef.current);
                if (descriptionTimeoutRef.current) clearTimeout(descriptionTimeoutRef.current);
                if (eraseTimeoutRef.current) clearTimeout(eraseTimeoutRef.current);

                setTitleText("");
                setDescriptionText("");

                let titleIndex = 0;
                const typeTitle = () => {
                    if (titleIndex < title.length) {
                        setTitleText(title.slice(0, titleIndex + 1));
                        titleIndex++;
                        titleTimeoutRef.current = setTimeout(typeTitle, titleSpeed);
                    } else {
                        let descIndex = 0;
                        const typeDescription = () => {
                            if (descIndex < description.length) {
                                setDescriptionText(description.slice(0, descIndex + 1));
                                descIndex++;
                                descriptionTimeoutRef.current = setTimeout(typeDescription, descriptionSpeed);
                            }
                        };
                        typeDescription();
                    }
                };
                typeTitle();
            }
            return;
        }

        // No desktop, usar hover
        const handleMouseEnter = () => {
            isHoveredRef.current = true;

            if (titleTimeoutRef.current) clearTimeout(titleTimeoutRef.current);
            if (descriptionTimeoutRef.current) clearTimeout(descriptionTimeoutRef.current);
            if (eraseTimeoutRef.current) clearTimeout(eraseTimeoutRef.current);

            setTitleText("");
            setDescriptionText("");

            let titleIndex = 0;
            const typeTitle = () => {
                if (titleIndex < title.length && isHoveredRef.current) {
                    setTitleText(title.slice(0, titleIndex + 1));
                    titleIndex++;
                    titleTimeoutRef.current = setTimeout(typeTitle, titleSpeed);
                } else if (titleIndex >= title.length && isHoveredRef.current) {
                    let descIndex = 0;
                    const typeDescription = () => {
                        if (descIndex < description.length && isHoveredRef.current) {
                            setDescriptionText(description.slice(0, descIndex + 1));
                            descIndex++;
                            descriptionTimeoutRef.current = setTimeout(typeDescription, descriptionSpeed);
                        }
                    };
                    typeDescription();
                }
            };
            typeTitle();
        };

        const handleMouseLeave = () => {
            isHoveredRef.current = false;
            if (titleTimeoutRef.current) clearTimeout(titleTimeoutRef.current);
            if (descriptionTimeoutRef.current) clearTimeout(descriptionTimeoutRef.current);

            const eraseDescription = () => {
                setDescriptionText(prev => {
                    if (prev.length > 0) {
                        eraseTimeoutRef.current = setTimeout(eraseDescription, eraseSpeed);
                        return prev.slice(0, -1);
                    } else {
                        eraseTitle();
                        return prev;
                    }
                });
            };

            const eraseTitle = () => {
                setTitleText(prev => {
                    if (prev.length > 0) {
                        eraseTimeoutRef.current = setTimeout(eraseTitle, eraseSpeed);
                        return prev.slice(0, -1);
                    }
                    return prev;
                });
            };

            eraseDescription();
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
            if (titleTimeoutRef.current) clearTimeout(titleTimeoutRef.current);
            if (descriptionTimeoutRef.current) clearTimeout(descriptionTimeoutRef.current);
            if (eraseTimeoutRef.current) clearTimeout(eraseTimeoutRef.current);
        };
    }, [title, description, titleSpeed, descriptionSpeed, eraseSpeed, isMobile, isInView]);

    return {
        titleText,
        descriptionText,
        containerRef,
    };
}
