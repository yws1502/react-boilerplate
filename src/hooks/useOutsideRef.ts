import { useEffect, useRef } from 'react';

export function useOutsideRef<T extends HTMLElement>(close: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetNode = event.target as Node;
      if (ref.current && !ref.current.contains(targetNode)) {
        close();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return ref;
}
