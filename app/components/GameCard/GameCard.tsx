import React from 'react';
import styles from './GameCard.module.css';
import Tag from '../Tag/Tag';

const GameCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.tagsContainer}>
        {/*<Tag variant='primary'>ARCADE</Tag>
        <Tag variant='secondary'>ARCADE</Tag>
        <Tag variant='tertiary'>ARCADE</Tag>
        <Tag variant='quaternary'>ARCADE</Tag>
  <Tag variant='quinary'>ARCADE</Tag>*/}
      </div>
    </div>
  );
};

export default GameCard;
