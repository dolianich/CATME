import React from 'react';
import defaultAvatar from '../../src/avatar/default.png';
import Image from 'next/image';
import styles from './Avatar.module.css'

type AvatarType = 'pfp' | 'default';

interface Props {
  type: AvatarType;
  imageUrl?: string;
}

const Avatar = ({ type, imageUrl }: Props) => {
  return (
    <div className={styles.avatarContainer}>
      {type === 'pfp' ? (
        <img src={imageUrl} alt="User Avatar" className={styles.avatar}/>
      ) : (
        <Image src={defaultAvatar} alt="Default avatar" quality={100} className={styles.avatar}/>
      )}
    </div>
  );
};

export default Avatar;
