import { useEffect } from 'react';

import { ROUTE_PATH } from 'constants/routePath';

export function useSEO(menu: keyof typeof ROUTE_PATH) {
  useEffect(() => {
    window.document.title = `Project - [${menu}]`;
  }, []);
}
