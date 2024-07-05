import React from 'react';
import styles from './Info.module.css';
import { Heart, Lightning } from '@phosphor-icons/react';
import Image from 'next/image';
import token from '../../data/src/general/token.svg';

const Info = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.slot}>
        <div className={styles.balanceIcon}>
          <Image src={token} alt={'img'} className={styles.token} />
        </div>
        <div className={styles.balance}>
          <p>999 999</p>
        </div>
      </div>
      <div className={styles.slot}>
        <div className={styles.heartIcon}>
          <Heart size={36} weight="fill" color="#FFA6BD" />
        </div>
        <div className={styles.health}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.energyIcon}>
          <Lightning size={36} weight="fill" color="#C1A6FF" />
        </div>
        <div className={styles.energy}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.questButton}>
          <p>QUESTS</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
