import { useEffect, useRef } from 'react';

export function useDidMountEffect(callback: () => void, dependencyArray: any[]) {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current === true) {
      callback();
    } else {
      didMount.current = true;
    }
  }, dependencyArray);
}
