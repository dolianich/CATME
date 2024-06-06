/* eslint-disable react/display-name */
import React from 'react';
import { forwardRef } from 'react';
import styles from './Window.module.css'

interface Props {
    children: React.ReactNode;
    toggleMenu: () => void;
  }

const Window = forwardRef<HTMLDialogElement, Props>( 
    ({ children, toggleMenu }, ref) => {
      
      return (
        <dialog
          className={styles.menu}
          ref={ref}
          onClick={() =>  toggleMenu()}
        >
          {children}
          {/*<button onClick={toggleDialog}>Close</button>*/}
        </dialog>
      );
    }
  );



export default Window
