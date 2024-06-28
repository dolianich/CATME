import React from 'react';
import styles from './ItemButton.module.css';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type ButtonType = 'default' | 'selected';

interface Props {
  onClick: () => void;
  img: StaticImageData;
  type?: ButtonType;
}

const ItemButton = ({ onClick, img, type}: Props) => {
  const buttonClass = type ? styles[type] : styles.default
  return (
    <button onClick={onClick} className={buttonClass}>
      <Image src={img} alt={'img'} className={styles.image} />
    </button>
  );
};

export default ItemButton;
