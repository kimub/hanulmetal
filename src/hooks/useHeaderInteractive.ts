import { useLayoutEffect, useState } from 'react';

export function useHeaderInteractive() {
  const [isScroll, setIsScroll] = useState(false);
  useLayoutEffect(() => {
    const handleHeaderOpacity = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
        return;
      }

      setIsScroll(false);
    };

    window.addEventListener('scroll', handleHeaderOpacity);

    return () => {
      window.removeEventListener('scroll', handleHeaderOpacity);
    };
  }, []);

  return { isScroll };
}
