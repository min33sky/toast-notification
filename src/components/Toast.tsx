import React from 'react';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

export default function Toast() {
  return (
    <ul
      aria-label="toast"
      className="fixed top-7 right-5 w-11/12  space-y-4  md:w-[400px] "
    >
      <li className="relative flex items-center justify-between overflow-hidden rounded-md bg-white p-4">
        <div className="flex items-center space-x-1">
          <CheckCircleIcon className="h-8 w-8 text-green-500 " />
          <span>Success: This is a success toast.</span>
        </div>
        <button>
          <XMarkIcon className="h-5 w-5" />
        </button>
      </li>

      <li className="relative flex items-center justify-between overflow-hidden rounded-md bg-white p-4">
        <div className="flex items-center space-x-1">
          <XCircleIcon className="h-8 w-8 text-red-500" />
          <span>Error: This is an error toast.</span>
        </div>
        <button>
          <XMarkIcon className="h-5 w-5" />
        </button>
      </li>

      <li className="relative flex items-center justify-between overflow-hidden rounded-md bg-white p-4">
        <div className="flex items-center space-x-1">
          <ExclamationTriangleIcon className="h-8 w-8 text-yellow-500" />
          <span>Warning: This is a warning toast.</span>
        </div>
        <button>
          <XMarkIcon className="h-5 w-5" />
        </button>
      </li>

      <li className="relative flex items-center justify-between overflow-hidden rounded-md bg-white p-4">
        <div className="flex items-center space-x-1">
          <InformationCircleIcon className="h-8 w-8 text-blue-500" />
          <span>Info: This is an information toast.</span>
        </div>
        <button>
          <XMarkIcon className="h-5 w-5" />
        </button>
      </li>
    </ul>
  );
}
