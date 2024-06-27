import React from 'react';
import styles from './ItemButton.module.css';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const ItemButton = ({ onClick, children }: Props) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default ItemButton;
