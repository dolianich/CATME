'use client';
import React from 'react';
import styles from './Logo.module.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import logoAnimation from './src/cat_logo.json';

interface Props {
  onClick?: () => void;
}

const Logo = ({ onClick }: Props) => {
  return (
    <div className={styles.logoContainer} onClick={onClick}>
      <Player
        autoplay
        loop
        src={logoAnimation}
        style={{ height: '40px', width: '40px' }}
      >
        <Controls
          visible={false}
          buttons={['play', 'repeat', 'frame', 'debug']}
        />
      </Player>
    </div>
  );
};

export default Logo;
