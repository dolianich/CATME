import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './Background.module.css';

interface Props {
  img: StaticImageData;
}

const Background = ({ img }: Props) => {
  return <Image src={img} alt="background" width={314} height={314} className={styles.absolute}/>;
};

export default Background;
