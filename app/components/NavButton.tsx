import React from 'react';
import Link from 'next/link';

interface Props {
  text: string;
  icon: React.ComponentType;
  color?: string;
  href?: string;
}

const NavButton = ({ text, icon: IconComponent, color, href }: Props) => {
  return (
    <Link href={href || '#'}>
      <button className="sidebar-button">
        <span className="button-icon">
        {IconComponent ? (
            <IconComponent />
          ) : null}
        </span>
        <span className="button-text">{text}</span>
      </button>
    </Link>
  );
};

export default NavButton;
