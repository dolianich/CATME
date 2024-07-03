import React from 'react';
import styles from './Eyes.module.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

interface Props {
  img: any;
}

const Eyes = ({ img }: Props) => {
  return (
    <div className={styles.absolute}>
      <Player autoplay loop src={img}>
        <Controls
          visible={false}
          buttons={['play', 'repeat', 'frame', 'debug']}
        />
      </Player>
    </div>
  );
};

export default Eyes;
