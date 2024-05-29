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
import Heading from './components/Heading/Heading';
import GameCard from './components/GameCard/GameCard';

export default function Home() {
  return (
    <div>
      <Heading>Discover</Heading>
      <div className={styles.cardsSection}>
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
}
