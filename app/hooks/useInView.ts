"use client";

import { useState, useEffect, useRef } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook que detecta quando um elemento entra na viewport
 */
export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.3, rootMargin = "0px", triggerOnce = true } = options;
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce && !hasTriggered) {
              setHasTriggered(true);
            }
          } else if (!triggerOnce) {
            setIsInView(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return {
    isInView: triggerOnce ? hasTriggered && isInView : isInView,
    elementRef,
  };
}
