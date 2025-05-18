import { twMerge } from 'tailwind-merge';

interface ConfirmProps {
  title: string;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
  className?: string;
}

/**
 * 해당 컴포넌트는 useConfirm 훅을 통해 사용합니다.
 */
function Confirm({ title, message, onClose, onConfirm, className }: ConfirmProps) {
  return (
    <>
      <div className="fixed inset-0 z-40 animate-fade-in" />
      <div
        className={twMerge(
          'bg-base-50 shadow-modals fixed left-1/2 top-1/2 z-50 flex w-[400px] -translate-x-1/2 -translate-y-1/2 flex-col items-start justify-between rounded-lg p-4 shadow-md',
          className,
        )}
      >
        <header className="mb-5 flex w-full items-center justify-between gap-3">
          <span className="flex-1 whitespace-break-spaces font-bold">{title}</span>
          <button type="button" onClick={onClose}>
            X
          </button>
        </header>
        <section className="w-full">
          <p className="mb-4 text-sm" title="message">
            {message}
          </p>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="button" onClick={onConfirm}>
              Confirm
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Confirm;
