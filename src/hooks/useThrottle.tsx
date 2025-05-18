import { useEffect, useRef, useState } from 'react';

export function useThrottle<T>(value: T, delay: number) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(
      () => {
        if (Date.now() - lastExecuted.current >= delay) {
          setThrottledValue(value);
          lastExecuted.current = Date.now();
        }
      },
      delay - (Date.now() - lastExecuted.current),
    );

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
}
