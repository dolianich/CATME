import React from 'react';
import Link from 'next/link';
import styles from './NavButton.module.css';

type ButtonState = 'selected' | 'default';
interface Props {
  text: string;
  icon: React.ComponentType<any>;
  color?: string;
  href?: string;
  size?: number;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
  state: 'selected' | 'default';
}

const NavButton = ({
  text,
  icon: Icon,
  color,
  href,
  size,
  weight,
  state,
}: Props) => {
  const buttonClass = state ? styles[state] : styles.default;
  return (
    <Link href={href || '#'} className={styles.linkRoot}>
      <button className={buttonClass}>
        <span className={styles.iconContainer}>
          <Icon size={size} weight={weight} color={color} />
        </span>
        <span className="button-text">{text}</span>
      </button>
    </Link>
  );
};

export default NavButton;
