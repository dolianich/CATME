'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Button from './components/Button/Button';
import { Fish, Trophy } from '@phosphor-icons/react/dist/ssr';
import Logo from './components/Logo/Logo';
import NavButton from './components/SideBar/NavButton/NavButton';
import SideBar from './components/SideBar/SideBar';
import Banner from './components/SideBar/Banner/Banner';
import IconButton from './components/IconButton/IconButton';
import { Eye } from '@phosphor-icons/react/dist/ssr';
import SearchInput from './components/SearchInput/SearchInput';

export default function Home() {
  const handleSearchChange = (value: string) => {
    console.log('Search term:', value);
  };

  const handleCustomSearch = () => {
    console.log('Custom search action triggered!');
  };

  return (
    <div>
      <SearchInput
        placeholder="Search..."
        onChange={handleSearchChange}
        onSearch={handleCustomSearch}
      ></SearchInput>
    </div>
  );
}
