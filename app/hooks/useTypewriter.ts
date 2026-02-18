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

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

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
    }, [title, description, titleSpeed, descriptionSpeed, eraseSpeed]);

    return {
        titleText,
        descriptionText,
        containerRef,
    };
}
