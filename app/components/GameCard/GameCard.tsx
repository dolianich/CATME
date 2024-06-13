'use client';
import React from 'react';
import styles from './GameCard.module.css';
import Tag from '../Tag/Tag';
import Image, { StaticImageData } from 'next/image';
import gameImage from '../../src/gamesImages/game.png';
import IconButton from '../IconButton/IconButton';
import { Heart, GameController } from '@phosphor-icons/react';
import Button from '../Button/Button';
import { TagVariant } from '../Tag/Tag';
import { useState } from 'react';

interface Props {
  title?: string;
  tagLabel: string;
  tagPrice: string;
  tagVariant?: TagVariant;
  imageUrl?: StaticImageData;
  description?: string;
  path?: string;
  onClick?: () => void;
}

const GameCard = ({
  title,
  tagLabel,
  tagVariant,
  imageUrl,
  tagPrice,
  description,
  onClick,
}: Props) => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);
  const addToFavorites = () => {
    setAddedToFavorites(!addedToFavorites);
    console.log('Add ' + title + ' to the favorites');
  };

  return (
    <div className={styles.cardContainer}>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Game Cover"
          className={styles.image}
          quality={100}
          style={{ width: '100%', height: 200 }}
        />
      ) : (
        <Image
          src={gameImage}
          alt="Game Cover"
          className={styles.image}
          quality={100}
          style={{ width: '100%', height: 200 }}
        />
      )}
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.tagsContainer}>
        <Tag tagVariant={tagVariant}>{tagLabel}</Tag>
        <Tag tagVariant="price">{tagPrice}</Tag>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.actionContainer}>
          <IconButton
            size={24}
            color="#85868B"
            variant="outlined"
            weight={addedToFavorites ? 'fill' : 'regular'}
            icon={Heart}
            onClick={addToFavorites}
          />
        </div>
        <Button title="PLAY" variant="withIcon" onClick={onClick}>
          <GameController size={24} weight="fill" color="#0A0B10" /> PLAY
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
