import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (options.triggerOnce && targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      } else if (!options.triggerOnce) {
        setIsIntersecting(false);
      }
    }, options);

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return [targetRef, isIntersecting];
}
