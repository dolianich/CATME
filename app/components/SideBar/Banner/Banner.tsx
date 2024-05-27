import React from 'react';
import Image from 'next/image';
import nft from './src/FreeNFT.png'
import styles from './Banner.module.css'
import Button from '../../Button/Button';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image src={nft} alt="NFT" width={224} height={224} className={styles.image}/>
      <Button  title={'CLAIM NFT'} variant='quaternary'>CLAIM NFT</Button>
    </div>
  );
};

export default Banner;
