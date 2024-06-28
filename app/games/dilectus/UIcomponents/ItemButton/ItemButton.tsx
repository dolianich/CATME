import React from 'react';
import styles from './ItemButton.module.css';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface Props {
  onClick: () => void;
  img: StaticImageData;
}

const ItemButton = ({ onClick, img }: Props) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <Image src={img} alt={'img'} className={styles.image} />
    </button>
  );
};

export default ItemButton;
