import { createContext, PropsWithChildren, ReactNode, useContext, useMemo, useState } from 'react';

const OverlayContext = createContext<{
  open: (overlay: ReactNode) => void;
  close: () => void;
} | null>(null);

function OverlayProvider({ children }: PropsWithChildren) {
  const [overlay, setOverlay] = useState<ReactNode | null>(null);

  const handleOverlay = useMemo(
    () => ({
      open: (overlay: ReactNode) => setOverlay(overlay),
      close: () => setOverlay(null),
    }),
    [],
  );

  return (
    <OverlayContext.Provider value={handleOverlay}>
      {children}
      {overlay}
    </OverlayContext.Provider>
  );
}

export const useOverlay = () => {
  const overlayContext = useContext(OverlayContext);

  if (!overlayContext)
    throw new Error(
      'OverlayProvider 컴포넌트 하위 컴포넌트에서만 useOverlay 훅을 사용할 수 있습니다.',
    );

  return overlayContext;
};

export default OverlayProvider;
