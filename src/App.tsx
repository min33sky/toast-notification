export default function App() {
  return (
    <div className="grid min-h-screen place-items-center bg-gradient-to-tr from-slate-800 to-slate-700">
      <h1 className="text-3xl font-bold tracking-widest text-slate-100">
        Toasts
      </h1>

      <div className="flex w-11/12 flex-col gap-4">
        <button className="rounded-md bg-green-500 py-2 font-bold text-white transition hover:opacity-90">
          Success
        </button>
        <button className="rounded-md bg-red-500 py-2 font-bold text-white transition hover:opacity-90">
          Error
        </button>
        <button className="rounded-md bg-yellow-500 py-2 font-bold text-white transition hover:opacity-90">
          Warning
        </button>
        <button className="rounded-md bg-blue-500 py-2 font-bold text-white transition hover:opacity-90">
          Info
        </button>
      </div>
    </div>
  );
}
