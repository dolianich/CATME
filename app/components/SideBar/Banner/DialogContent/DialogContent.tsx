import React from 'react';
import styles from './DialogContent.module.css';
import Button from '@/app/components/Button/Button';
import Image from 'next/image';
import nft from '../src/FreeNFT.png';

const DialogContent = () => {
  return (
    <div className={styles.dialogContainer}>
      <Image
        src={nft}
        alt="NFT"
        width={300}
        height={300}
        quality={100}
        className={styles.nft}
      />
      <h1>WELCOME BADGE</h1>
      <p>Welcome to the future of WEB3 Gaming!<br />Your CATME membership starts here<br />by unlocking endless gaming adventures</p>
      <Button variant="senary" title="CLAIM NFT">
        CLAIM NFT
      </Button>
    </div>
  );
};

export default DialogContent;
