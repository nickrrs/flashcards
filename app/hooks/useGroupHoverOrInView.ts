"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Hook que detecta hover em desktop e inView em mobile
 */
export function useGroupHoverOrInView() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  
  // useInView precisa do elementRef, então vamos criar nosso próprio observer
  const [isInView, setIsInView] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    // Detectar se é mobile
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
    
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            setIsInView(true);
            hasTriggeredRef.current = true;
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Se for mobile, já configuramos o observer acima
    if (isMobile) {
      return;
    }

    // Se for desktop, usar hover
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
  }, [isMobile]);

  // No mobile, usar isInView; no desktop, usar isHovered
  const shouldAnimate = isMobile ? isInView : isHovered;

  return {
    isHovered: shouldAnimate,
    elementRef,
  };
}
