"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Hook que detecta quando o elemento pai com classe "group" está em hover
 */
export function useGroupHover() {
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const findGroupParent = (el: HTMLElement | null): HTMLElement | null => {
      if (!el) return null;
      if (el.classList.contains("group")) return el;
      return findGroupParent(el.parentElement);
    };

    const groupParent = findGroupParent(element);
    if (!groupParent) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    groupParent.addEventListener("mouseenter", handleMouseEnter);
    groupParent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      groupParent.removeEventListener("mouseenter", handleMouseEnter);
      groupParent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { isHovered, elementRef };
}
