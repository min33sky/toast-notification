import React from 'react';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

interface Props {
  type: 'success' | 'error' | 'warning' | 'info';
}

export default function ToastItem({ type }: Props) {
  const toastType = {
    success: {
      icon: <CheckCircleIcon className="h-8 w-8 text-green-500 " />,
      text: 'Success: This is a success toast.',
    },
    error: {
      icon: <XCircleIcon className="h-8 w-8 text-red-500" />,
      text: 'Error: This is an error toast.',
    },
    warning: {
      icon: <ExclamationTriangleIcon className="h-8 w-8 text-yellow-500" />,
      text: 'Warning: This is a warning toast.',
    },
    info: {
      icon: <InformationCircleIcon className="h-8 w-8 text-blue-500" />,
      text: 'Info: This is an information toast.',
    },
  };

  return (
    <li className="toast">
      <div className="flex items-center space-x-1">
        {toastType[type].icon}
        {toastType[type].text}
      </div>
      <button>
        <XMarkIcon className="h-5 w-5" />
      </button>
    </li>
  );
}
