'use client';
import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import styles from './TopBar.module.css';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import { useState } from 'react';
import Logo from '../Logo/Logo';

interface Props {
  logoClick?: () => {};
}

const TopBar = ({logoClick}: Props) => {
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

  return (
    <div className={styles.topBarContainer}>
      <SearchInput
        placeholder="Search..."
        onChange={handleSearchChange}
        onSearch={handleCustomSearch}
      ></SearchInput>
      <div className={styles.firstSection}>
        <div className={styles.logo}>
          <Logo onClick={logoClick} />
        </div>
        {isAuthenticated ? (
          <Avatar type="default" onClick={avatarClick} />
        ) : (
          <Button
            title={'START PLAYING'}
            variant="secondary"
            onClick={authClick}
          >
            START PLAYING
          </Button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
