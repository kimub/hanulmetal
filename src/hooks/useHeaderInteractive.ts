import { useLayoutEffect, useRef } from 'react';

export function useHeaderInteractive() {
  const headerRef =
    useRef<HTMLElement>() as React.MutableRefObject<HTMLElement>;

  useLayoutEffect(() => {
    headerRef.current.classList.add('opacity-90');

    const handleHeaderOpacity = () => {
      if (window.scrollY <= 0) {
        headerRef.current.classList.remove('opacity-90');
        return;
      }

      headerRef.current.classList.add('opacity-90');
    };

    window.addEventListener('scroll', handleHeaderOpacity);

    return () => {
      window.removeEventListener('scroll', handleHeaderOpacity);
    };
  }, []);

  return headerRef;
}
