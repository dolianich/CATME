import React from 'react';
import NavButton from './NavButton/NavButton';
import { Trophy } from '@phosphor-icons/react/dist/ssr';
import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={styles.navContainer}>
      <NavButton
        text="Trophies"
        icon={Trophy}
        href="/"
        size={24}
        color="#F0F1FF"
        weight="fill"
      />
      <NavButton
        text="Trophies"
        icon={Trophy}
        href="/"
        size={24}
        color="#F0F1FF"
        weight="fill"
      />
      <NavButton
        text="Trophies"
        icon={Trophy}
        href="/"
        size={24}
        color="#F0F1FF"
        weight="fill"
      />
    </div>
  );
};

export default SideBar;
