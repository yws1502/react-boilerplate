import { useOverlay } from 'components/common/OverlayProvider';

interface ConfirmComponentProps {
  onClose: () => void;
  onConfirm: () => void;
}

// NOTE: useConfirm으로 렌더링되는 컴포넌트는 onClose와 onConfirm 필수
export function useConfirm<P extends ConfirmComponentProps>(
  ConfirmComponent: (props: P) => JSX.Element,
) {
  const { open, close } = useOverlay();

  const confirm = (props: Omit<P, 'onClose' | 'onConfirm'>) =>
    new Promise<boolean>((resolve) => {
      const id = open(
        <ConfirmComponent
          {...(props as P)}
          onClose={() => {
            resolve(false);
            close(id);
          }}
          onConfirm={() => {
            resolve(true);
            close(id);
          }}
        />,
      );
    });

  return {
    confirm,
  };
}
