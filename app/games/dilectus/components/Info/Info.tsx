import React from 'react';
import styles from './Info.module.css';
import { House, PuzzlePiece, Bone, Palette, Bed } from '@phosphor-icons/react';
import Image from 'next/image';
import token from '../../data/src/general/token.svg';

const Info = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.slot}>
        <div className={styles.balanceIcon}>
        <Image src={token} alt={'img'} className={styles.token} />
        </div>
        <div className={styles.balance}>999 999</div>
      </div>
      <div className={styles.slot}>
        <div className={styles.balanceIcon}></div>
        <div className={styles.balance}>999 999</div>
      </div>
      <div className={styles.slot}>
        <div className={styles.balanceIcon}></div>
        <div className={styles.balance}>999 999</div>
      </div>
      <div className={styles.slot}>
        <div className={styles.balanceIcon}></div>
        <div className={styles.balance}>999 999</div>
      </div>
    </div>
  );
};

export default Info;
