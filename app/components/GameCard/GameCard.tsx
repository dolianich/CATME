'use client';
import React from 'react';
import styles from './GameCard.module.css';
import Tag from '../Tag/Tag';
import Image, { StaticImageData } from 'next/image';
import gameImage from '../../src/gamesImages/game.png';
import IconButton from '../IconButton/IconButton';
import { Eye, Info } from '@phosphor-icons/react';
import Button from '../Button/Button';
import { TagVariant } from '../Tag/Tag';

interface Props {
  title?: string;
  tagLabel: string;
  tagVariant?: TagVariant;
  imageUrl?: StaticImageData;
  playClick?: () => void;
  watchClick?: () => void;
  infoClick?: () => void
}


const GameCard = ({ title, tagLabel, tagVariant, imageUrl, playClick, watchClick, infoClick }: Props) => {
  return (
    <div className={styles.cardContainer}>
      {imageUrl ? (
        <Image
          src={imageUrl}
          height={200}
          alt="Game Cover"
          className={styles.image}
          quality={100}
        />
      ) : (
        <Image
          src={gameImage}
          height={200}
          alt="Game Cover"
          className={styles.image}
          quality={100}
        />
      )}
      <h2>{title}</h2>
      <div className={styles.tagsContainer}>
        <Tag tagVariant={tagVariant}>{tagLabel}</Tag>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.actionContainer}>
          <IconButton
            size={24}
            color="#85868B"
            variant="outlined"
            icon={Eye}
            onClick={watchClick}
          />
          <IconButton
            size={24}
            color="#85868B"
            variant="outlined"
            icon={Info}
            onClick={infoClick}
          />
        </div>
        <Button title="PLAY" variant="tertiary" onClick={playClick}>
          PLAY
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
