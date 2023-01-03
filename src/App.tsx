import Toast from './components/Toast';
import { ToastType, useToastActions } from './contexts/toastContext';

export default function App() {
  const { createToast, removeToast } = useToastActions();

  const handleCreateToast = (type: ToastType) => {
    const id = createToast(type);
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  return (
    <div className="grid min-h-screen place-items-center bg-gradient-to-tr from-slate-800 to-slate-700">
      <h1 className="text-3xl font-bold tracking-widest text-slate-100">
        Toasts
      </h1>

      <div className="grid w-11/12 gap-4 md:grid-cols-4">
        <button
          onClick={() => handleCreateToast('success')}
          className="btn-success"
        >
          Success
        </button>
        <button
          onClick={() => handleCreateToast('error')}
          className="btn-error"
        >
          Error
        </button>
        <button
          onClick={() => handleCreateToast('warning')}
          className="btn-warning"
        >
          Warning
        </button>
        <button onClick={() => handleCreateToast('info')} className="btn-info">
          Info
        </button>
      </div>

      <Toast />
    </div>
  );
}
