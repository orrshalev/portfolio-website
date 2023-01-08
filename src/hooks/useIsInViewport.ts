import type React from "react";
import { useState, useEffect, useRef } from "react";

/**
 * Check if an element is in the viewport.
 *  
 * @param ref - Ref to the HTML element
 * @returns Boolean indicating if the element is in the viewport
 */
const useIsInViewport = (ref: React.RefObject<HTMLElement>) => {
  const [inViewport, setInViewport] = useState(false);

  const observer = useRef<IntersectionObserver>();
  useEffect(() => {
    if (!ref.current) return;

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry) {
        setInViewport(entry.isIntersecting);
      }
    });
    if (observer.current) {
      observer.current.observe(ref.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [ref, observer]);

  return inViewport;
};

export default useIsInViewport;
