import { useOverlay } from 'components/common/OverlayProvider';

interface AlertComponentProps {
  onClose: () => void;
}

// NOTE: useAlert으로 렌더링되는 컴포넌트는 onClose 필수
export function useAlert<P extends AlertComponentProps>(AlertComponent: (props: P) => JSX.Element) {
  const { open, close } = useOverlay();

  const alert = (props: Omit<P, 'onClose'>) => {
    open(
      <AlertComponent
        {...(props as P)}
        onClose={() => {
          close();
        }}
      />,
    );
  };

  return {
    alert,
  };
}
