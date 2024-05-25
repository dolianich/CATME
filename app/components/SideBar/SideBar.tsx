import React from 'react';
import NavButton from './NavButton/NavButton';
import {
  Trophy,
  SquaresFour,
  TreasureChest,
  Newspaper,
  Storefront,
  UsersThree,
  Eye,
} from '@phosphor-icons/react/dist/ssr';
import styles from './SideBar.module.css';

const SideBar = () => {
  const navButtons = [
    {
      label: 'Discover',
      href: '/',
      icon: SquaresFour,
      size: 24,
    },
    {
      label: 'Leaderboard',
      href: '/leaderboard',
      icon: Trophy,
      size: 24,
    },
    {
      label: 'Assets',
      href: '/assets',
      icon: TreasureChest,
      size: 24,
    },
    {
      label: 'News',
      href: '/news',
      icon: Newspaper,
      size: 24,
    },
    {
      label: 'Marketplace',
      href: '/marketplace',
      icon: Storefront,
      size: 24,
    },
    {
      label: 'Community',
      href: '/community',
      icon: UsersThree,
      size: 24,
    },
    {
      label: 'Watchlist',
      href: '/watchlist',
      icon: Eye,
      size: 24,
    },
  ];
  return (
    <nav className={styles.navContainer}>
      {navButtons.map((button) => (
        <NavButton
          key={button.href}
          text={button.label}
          icon={button.icon}
          href={button.href}
          size={button.size}
          color="#85868B"
          weight="regular"
        />
      ))}
    </nav>
  );
};

export default SideBar;
