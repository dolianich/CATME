'use client';
import React from 'react';
import styles from './GameCard.module.css';
import Tag from '../Tag/Tag';
import Image from 'next/image';
import gameImage from '../../src/gamesImages/game.png';
import IconButton from '../IconButton/IconButton';
import {Eye, Info} from '@phosphor-icons/react';
import Button from '../Button/Button';

const GameCard = () => {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={gameImage}
        height={200}
        alt="Game Cover"
        className={styles.image}
      ></Image>
      <h2>Brick Breaker</h2>
      <div className={styles.tagsContainer}>
        <Tag variant="primary">ARCADE</Tag>
        <Tag variant="secondary">MINI-GAME</Tag>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.actionContainer}>
          <IconButton size={24} color="#85868B" variant="outlined" icon={Eye}/>
          <IconButton size={24} color="#85868B" variant="outlined" icon={Info}/>
        </div>
        <Button title='PLAY' variant='tertiary'>PLAY</Button>
      </div>
    </div>
  );
};

export default GameCard;
