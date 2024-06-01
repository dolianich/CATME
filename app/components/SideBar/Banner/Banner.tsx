import React from 'react';
import Image from 'next/image';
import nft from './src/FreeNFT.png';
import styles from './Banner.module.css';
import Button from '../../Button/Button';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image
        src={nft}
        alt="NFT"
        width={178}
        height={178}
        className={styles.image}
      />
      <Button title={'CLAIM NFT'} variant="quaternary">
        CLAIM NFT
      </Button>
    </div>
  );
};

export default Banner;
