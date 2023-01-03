import { createContext, useContext, useMemo, useRef, useState } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

type ToastValueType = {
  id: number;
  type: ToastType;
};

type ToastActionsType = {
  createToast: (type: ToastType) => number;
  removeToast: (id: number) => void;
};

const ToastValueContext = createContext<ToastValueType[]>([]);
const ToastActionsContext = createContext<ToastActionsType>({
  createToast: () => 0,
  removeToast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastValueType[]>([]);
  const id = useRef(0); // toast id

  const actions = useMemo(
    () => ({
      createToast: (type: ToastType) => {
        id.current++;
        setToasts((prev) => [...prev, { id: id.current, type }]);
        return id.current;
      },
      removeToast: (id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      },
    }),
    [],
  );

  return (
    <ToastActionsContext.Provider value={actions}>
      <ToastValueContext.Provider value={toasts}>
        {children}
      </ToastValueContext.Provider>
    </ToastActionsContext.Provider>
  );
}

export function useToastValue() {
  const value = useContext(ToastValueContext);
  if (!value) {
    throw new Error('Cannot find ToastValueProvider');
  }
  return value;
}

export function useToastActions() {
  const actions = useContext(ToastActionsContext);
  if (!actions) {
    throw new Error('Cannot find ToastActionsProvider');
  }
  return actions;
}
