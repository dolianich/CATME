import React from 'react';
import styles from './Dialog.module.css';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const Dialog = ({ onClose, isOpen }: Props) => {
  return (
    <div>
      {isOpen && (
        <dialog className={styles.dialog}>
          <h1>NFT Claim</h1>
          <button onClick={onClose}>Close</button>
        </dialog>
      )}
    </div>
  );
};

export default Dialog;
