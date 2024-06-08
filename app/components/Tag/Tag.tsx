import React from 'react';
import styles from './Tag.module.css';

export type TagVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'price';

interface Props {
  children: string;
  tagVariant?: TagVariant;
}

const Tag = ({ children, tagVariant }: Props) => {
  const tagClass = tagVariant ? styles[tagVariant] : styles.primary;
  return <div className={tagClass}>{children.toUpperCase()}</div>;
};

export default Tag;
