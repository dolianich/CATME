'use client';
import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import styles from './TopBar.module.css';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';


const TopBar = () => {

  const authClick = () => console.log("Auth button was clicked");

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
      <Button title={'START PLAYING'} variant="secondary" onClick={authClick}>START PLAYING</Button>
      <Avatar type='pfp' imageUrl='https://imageio.forbes.com/specials-images/imageserve/65d8c344c4a366da0564117e/Avatar--The-Last-Airbender--Gordon-Cormier-as-Aang-in-episode-101-of-Avatar--The-Last/0x0.jpg?format=jpg&crop=2639,1760,x4,y0,safe&width=960'/>
    </div>
  );
};

export default TopBar;
