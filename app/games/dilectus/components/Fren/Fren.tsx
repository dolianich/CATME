import React from 'react';
import styles from './Fren.module.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

interface Props {
  img: string | object;
}

const Fren = ({ img }: Props) => {
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

export default Fren;
