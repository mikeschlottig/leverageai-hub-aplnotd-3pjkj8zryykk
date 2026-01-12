import { useState, useEffect, useRef, useCallback } from 'react';
interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}
export function useIntersectionObserver(
  options: IntersectionObserverOptions = { rootMargin: '100px', threshold: 0.1 }
): [(node: Element | null) => void, boolean] {
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const ref = useCallback((node: Element | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    observerRef.current = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);
    if (node) {
      observerRef.current.observe(node);
    }
  }, [options]);
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  return [ref, inView];
}