'use client';
import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import styles from './TopBar.module.css';
import Button from '../Button/Button';

const TopBar = () => {
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
      <Button title={'START PLAYING'} variant="secondary">START PLAYING</Button>
    </div>
  );
};

export default TopBar;
