import React from 'react';
import Link from 'next/link';

interface Props {
  text: string;
  icon: React.ComponentType<any>;
  color?: string;
  href?: string;
  size?: number;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}

const NavButton = ({
  text,
  icon: Icon,
  color,
  href,
  size,
  weight,
}: Props) => {
  return (
    <Link href={href || '#'}>
      <button className="sidebar-button">
        <span className="button-icon">
          <Icon size={size} weight={weight} />
        </span>
        <span className="button-text">{text}</span>
      </button>
    </Link>
  );
};

export default NavButton;
