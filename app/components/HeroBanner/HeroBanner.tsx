import React from 'react';
import styles from './HeroBanner.module.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import spaceCatAnim from './src/space_cat.json';
import Button from '../Button/Button';

const HeroBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentContainer}>
        <Player
          autoplay
          loop
          src={spaceCatAnim}
          style={{ height: '300px', width: '300px' }}
        >
          <Controls
            visible={false}
            buttons={['play', 'repeat', 'frame', 'debug']}
          />
        </Player>
        <div className={styles.textContainer}>
          <h1>WEB3 Gaming and Beyond</h1>
          <p>Stay in the loop! Join our Discord server</p>
          <Button variant="senary" title={'JOIN'}>
            JOIN OUR DISCORD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
