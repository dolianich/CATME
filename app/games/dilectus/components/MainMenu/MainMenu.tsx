import React from 'react';
import styles from './MainMenu.module.css';
import { House, PuzzlePiece, Bone, Palette, Bed } from '@phosphor-icons/react';

interface Props {
  onClickPlay: () => void;
  onClickFeed: () => void;
  onClickSleep: () => void;
  onClickCreate: () => void;
  onClickStats: () => void;
}

const MainMenu = ({
  onClickPlay,
  onClickFeed,
  onClickSleep,
  onClickCreate,
  onClickStats,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={onClickStats}>
        <House size={24} weight="fill" />
      </button>
      <button onClick={onClickPlay}>
        <PuzzlePiece size={24} weight="fill" />
      </button>
      <button onClick={onClickFeed}>
        <Bone size={24} weight="fill" />
      </button>
      <button onClick={onClickCreate}>
        <Palette size={24} weight="fill" />
      </button>
      <button onClick={onClickSleep}>
        <Bed size={24} weight="fill" />
      </button>
    </div>
  );
};

export default MainMenu;
