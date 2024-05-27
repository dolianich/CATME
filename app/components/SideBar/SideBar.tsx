'use client';

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
} from '@phosphor-icons/react';
import styles from './SideBar.module.css';
import { usePathname } from 'next/navigation';
import Logo from '../Logo/Logo';
import Banner from './Banner/Banner';

const SideBar = () => {
  const currentPath = usePathname();
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
    <div className={styles.sideBar}>
      <div className={styles.logoSection}>
        <Logo />
        <h2>CATME</h2>
      </div>
      <nav className={styles.navContainer}>
        {navButtons.map((button) => (
          <NavButton
            key={button.href}
            text={button.label}
            icon={button.icon}
            href={button.href}
            size={button.size}
            color={`${button.href === currentPath ? '#F0F1FF' : '#85868B'}`}
            weight={`${button.href === currentPath ? 'fill' : 'regular'}`}
            state={`${button.href === currentPath ? 'selected' : 'default'}`}
          />
        ))}
      </nav>
      <Banner></Banner>
    </div>
  );
};

export default SideBar;
