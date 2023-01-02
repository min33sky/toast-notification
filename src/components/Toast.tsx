import React, { useEffect, useState } from 'react';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import ToastItem from './ToastItem';
import { ToastType } from '../App';

interface props {
  toasts: ToastType[];
}

export default function Toast({ toasts }: props) {
  return (
    <ul
      aria-label="toast"
      className="fixed top-7 right-5 w-11/12  space-y-4  md:w-[400px] "
    >
      {toasts.map((type, index) => (
        <ToastItem type={type} key={index} />
      ))}
    </ul>
  );
}
