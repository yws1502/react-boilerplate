import { twMerge } from 'tailwind-merge';

export type AlertType = 'success' | 'error' | 'warn' | 'info' | 'default';
interface AlertProps {
  message: string;
  onClose: () => void;
  className?: string;
  type?: AlertType;
}

/**
 * 해당 컴포넌트는 useAlert 훅을 통해 사용합니다.
 */
function Alert({ message, onClose, className, type = 'default' }: AlertProps) {
  return (
    <div
      className={twMerge(
        'shadow-modals fixed left-1/2 top-8 z-50 flex w-[80%] -translate-x-1/2 items-start justify-between rounded-lg p-3',
        colors[type],
        className,
      )}
    >
      <div className="flex items-start gap-3">
        i
        <span className="flex-1 whitespace-break-spaces text-sm" title={message}>
          {message}
        </span>
      </div>
      <button type="button" onClick={onClose}>
        X
      </button>
    </div>
  );
}

const colors: Record<AlertType, string> = {
  success: 'bg-green-400',
  warn: 'bg-yellow-400',
  error: 'bg-red-400',
  info: 'bg-blue-400',
  default: 'bg-white',
};

export default Alert;
