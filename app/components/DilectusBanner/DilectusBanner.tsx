'use client';
import React from 'react';
import styles from './DilectusBanner.module.css';
import Image from 'next/image';
import dilectus1 from '../../src/images/dilectus1.svg';
import dilectus2 from '../../src/images/dilectus2.svg';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';

const DilectusBanner = () => {
  const router = useRouter();
  const click = () => router.push(`/games/dilectus`);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src={dilectus1} alt={'dilectus1'} className={styles.image} />
        <div className={styles.cta}>
          <h1>DILECTUS</h1>
          <p>Your On-Chain Fren</p>
          <Button
            variant="secondary"
            title={'try demo'}
            onClick={() => click()}
          >
            TRY DEMO
          </Button>
        </div>
        <Image src={dilectus2} alt={'dilectus2'} className={styles.image} />
      </div>
    </div>
  );
};

export default DilectusBanner;
