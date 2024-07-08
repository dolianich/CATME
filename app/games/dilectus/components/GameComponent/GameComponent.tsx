import React from 'react';
import styles from './GameComponent.module.css';

const GameComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gameWindow}>GAME</div>
    </div>
  );
};

export default GameComponent;
