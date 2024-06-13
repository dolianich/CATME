'use client';
import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import styles from './TopBar.module.css';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import { useRef } from 'react';
import Window from '../MobileNav/Window/Window';
import MobileNav from '../MobileNav/Content/MobileNav';

const TopBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authClick = () => {
    setIsAuthenticated(!isAuthenticated);
    console.log('Auth button was clicked');
  };

  const avatarClick = () => {
    setIsAuthenticated(!isAuthenticated);
    console.log('Avatar was clicked; Logged out');
  };

  const handleSearchChange = (value: string) => {
    console.log('Search term:', value);
  };

  const handleCustomSearch = () => {
    console.log('Custom search action triggered!');
  };

  const [menuContent, setMenuContent] = useState<React.ReactNode>(null);

  const menuRef = useRef<HTMLDialogElement>(null);

  const toggleMenu = () => {
    if (!menuRef.current) {
      return;
    }
    menuRef.current.hasAttribute('open')
      ? menuRef.current.close()
      : menuRef.current.showModal();
  };

  return (
    <div className={styles.topBarContainer}>
      <SearchInput
        placeholder="Search..."
        onChange={handleSearchChange}
        onSearch={handleCustomSearch}
      ></SearchInput>
      <div className={styles.firstSection}>
        <div className={styles.logo}>
          <Logo
            onClick={() => {
              setMenuContent(<MobileNav />);
              toggleMenu();
            }}
          />
          <Window toggleMenu={toggleMenu} ref={menuRef}>
            {menuContent}
          </Window>
        </div>
        {isAuthenticated ? (
          <Avatar type="default" onClick={avatarClick} />
        ) : (
          <Button
            title={'LOGIN'}
            variant="outlined"
            onClick={authClick}
          >
            LOGIN
          </Button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
