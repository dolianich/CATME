import React from 'react';
import styles from './CategoryButton.module.css';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type ButtonType = 'default' | 'selected';

interface Props {
  img: StaticImageData;
  type?: ButtonType;
  id: string;
  onClick: (e: any) => void;
  imgId?: string;
}

const CategoryButton = ({ id, onClick, type, img, imgId }: Props) => {
  const buttonClass = type ? styles[type] : styles.default;
  return (
    <button id={id} onClick={onClick} className={buttonClass}>
      <Image src={img} alt={'img'} className={styles.image} id={imgId} />
    </button>
  );
};

export default CategoryButton;
