import { useEffect, useState, useRef } from 'react';

export default function useIntersectionObserver<T extends HTMLElement>() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Proporção do elemento visível para ser considerado "visível"
      }
    );

    const target = ref.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return { isVisible, ref };
}
