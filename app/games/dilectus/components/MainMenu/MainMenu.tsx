import React from 'react';
import styles from './MainMenu.module.css';

interface Props {
  onClickPlay: () => void;
  onClickFeed: () => void;
  onClickSleep: () => void;
  onClickCreate: () => void;
}

const MainMenu = ({
  onClickPlay,
  onClickFeed,
  onClickSleep,
  onClickCreate,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={onClickPlay}>Play</button>
      <button onClick={onClickFeed}>Feed</button>
      <button onClick={onClickCreate}>Create</button>
      <button onClick={onClickSleep}>Sleep</button>
    </div>
  );
};

export default MainMenu;
