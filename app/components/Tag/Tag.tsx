import React from 'react';
import styles from './Tag.module.css';

type TagVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';

interface Props {
  children: string;
  variant?: TagVariant;
}

const Tag = ({ children, variant }: Props) => {
  const tagClass = variant ? styles[variant] : styles.primary;
  return <div className={tagClass}>{children}</div>;
};

export default Tag;
