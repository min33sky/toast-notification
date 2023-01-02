import Toast from './components/Toast';

export default function App() {
  return (
    <div className="grid min-h-screen place-items-center bg-gradient-to-tr from-slate-800 to-slate-700">
      <h1 className="text-3xl font-bold tracking-widest text-slate-100">
        Toasts
      </h1>

      <div className="grid w-11/12 gap-4 md:grid-cols-4">
        <button className="btn-success">Success</button>
        <button className="btn-error">Error</button>
        <button className="btn-warning">Warning</button>
        <button className="btn-info">Info</button>
      </div>

      <Toast />
    </div>
  );
}
