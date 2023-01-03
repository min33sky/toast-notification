import ToastItem from './ToastItem';
import { useToastValue } from '../contexts/toastContext';

export default function Toast() {
  const toasts = useToastValue();

  return (
    <ul
      aria-label="toast"
      className="fixed top-7 right-5 w-11/12  space-y-4  md:w-[400px] "
    >
      {toasts.map((toast, index) => (
        <ToastItem type={toast.type} key={index} />
      ))}
    </ul>
  );
}
