import React from 'react';
import Link from 'next/link';
import styles from './NavButton.module.css';

interface Props {
  text: string;
  icon: React.ComponentType<any>;
  color?: string;
  href?: string;
  size?: number;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}

const NavButton = ({ text, icon: Icon, color, href, size, weight }: Props) => {
  return (
    <Link href={href || '#'} className={styles.linkRoot}>
      <button className={styles.selected}>
        <span className={styles.iconContainer}>
          <Icon size={size} weight={weight} color={color} />
        </span>
        <span className="button-text">{text}</span>
      </button>
    </Link>
  );
};

export default NavButton;
