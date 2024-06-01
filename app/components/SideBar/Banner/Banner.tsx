import React from 'react';
import Image from 'next/image';
import nft from './src/FreeNFT.png';
import styles from './Banner.module.css';
import Button from '../../Button/Button';
import { useRef } from 'react';

const Banner = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleDialog = () => {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute('open')
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  return (
    <div className={styles.banner}>
      <Image
        src={nft}
        alt="NFT"
        width={178}
        height={178}
        className={styles.image}
      />
      <Button title={'CLAIM NFT'} variant="quaternary" onClick={toggleDialog}>
        CLAIM NFT
      </Button>
      <dialog ref={dialogRef}>Content</dialog>
    </div>
  );
};

export default Banner;
