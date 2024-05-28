import React from 'react';
import styles from './IconButton.module.css';

interface Props {
  icon: React.ComponentType<any>;
  color?: string;
  onClick?: () => void;
  size?: number;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
  variant: 'outlined' | 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

const IconButton = ({
  icon: Icon,
  color,
  onClick,
  size,
  weight,
  variant,
}: Props) => {
  const buttonClass = variant ? styles[variant] : styles.outlined;
  return (
    <button className={buttonClass} onClick={onClick}>
      <Icon size={size} weight={weight} color={color} />
    </button>
  );
};

export default IconButton;
