import React from 'react';
import styles from './ItemButton.module.css';

interface Props {
  onClick: () => void;
  key?: React.Key;
  children: React.ReactNode;
}

const ItemButton = ({ onClick, key, children }: Props) => {
  return (
    <button onClick={onClick} key={key} className={styles.button}>
      {children}
    </button>
  );
};

export default ItemButton;
