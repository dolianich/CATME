import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import devAnimation from './src/catme_development.json';

const DevAnim = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={devAnimation}
        style={{ height: '350px', width: '350px' }}
      >
        <Controls
          visible={false}
          buttons={['play', 'repeat', 'frame', 'debug']}
        />
      </Player>
    </div>
  );
};

export default DevAnim;
