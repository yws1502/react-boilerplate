import {
  createContext,
  Fragment,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

const OverlayContext = createContext<{
  open: (overlay: ReactNode) => number;
  close: (id: number) => void;
} | null>(null);

let id = 0;

function OverlayProvider({ children }: PropsWithChildren) {
  const [overlays, setOverlays] = useState<Map<number, ReactNode>>(new Map());

  const handleOverlay = useMemo(
    () => ({
      open: (overlay: ReactNode) => {
        id += 1;

        setOverlays((prev) => {
          const newMap = new Map(prev);
          newMap.set(id, overlay);

          return newMap;
        });
        return id;
      },
      close: (id: number) => {
        setOverlays((prev) => {
          const newMap = new Map(prev);
          newMap.delete(id);
          return newMap;
        });
      },
    }),
    [],
  );

  return (
    <OverlayContext.Provider value={handleOverlay}>
      {children}
      {Array.from(overlays.entries()).map(([id, element]) => (
        <Fragment key={id}>{element}</Fragment>
      ))}
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
