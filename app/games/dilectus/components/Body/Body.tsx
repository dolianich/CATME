import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './Body.module.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

interface Props {
  img: string | object;
}

const Body = ({ img }: Props) => {
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

export default Body;
