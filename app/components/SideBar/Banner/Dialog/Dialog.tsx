import React, { ReactNode } from 'react';
import styles from './Dialog.module.css';
import { forwardRef } from 'react';

interface Props{
    children: React.ReactNode;
    toggleDialog: () => void;
}

const Dialog = forwardRef<HTMLDialogElement, Props>(({children, toggleDialog}, ref) => {
  return (
    <dialog
      ref={ref}
      onClick={(e) => e.currentTarget === e.target && toggleDialog()}
    >
      {children}
      <button onClick={toggleDialog}>Close</button>
    </dialog>
  );
});

export default Dialog;
