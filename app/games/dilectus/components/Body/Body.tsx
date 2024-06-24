import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './Body.module.css';

interface Props {
  img: StaticImageData;
}

const Body = ({ img }: Props) => {
  return (
    <Image
      src={img}
      alt="body"
      width={350}
      height={350}
      className={styles.absolute}
    />
  );
};

export default Body;
