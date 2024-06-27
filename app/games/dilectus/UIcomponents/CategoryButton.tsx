import React from 'react';
import styles from './categoryButton.module.css';

interface Props {
  id: string;
  onClick: (e: any) => void;
  type?: 'default' | 'selected';
  children: React.ReactNode;
}

const CategoryButton = ({ id, onClick, type, children }: Props) => {
  return (
    <button id={id} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default CategoryButton;
