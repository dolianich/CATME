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

const games = [
  { title: 'Brick Breaker', category: 'ARCADE' },
  { title: 'Tetris', category: 'MINI-GAME' },
  { title: 'Bubble Shooter', category: 'DEGEN' },
  { title: 'Meme Machine', category: 'P2E' },
];

export default function Home() {
  return (
    <div>
      <Heading>Recommended Games</Heading>
      <div className={styles.cardsSection}>
        {games.map((game) => (
          <GameCard
            title={game.title}
            tagLabel={game.category}
            tagVariant={
              game.category === 'ARCADE'
                ? 'primary'
                : game.category === 'MINI-GAME'
                ? 'secondary'
                : game.category === 'DEGEN'
                ? 'tertiary'
                : 'quaternary'
            }
          />
        ))}
        <GameCard
          title="Brick Breaker"
          tagLabel="ARCADE"
          tagVariant="primary"
        />
      </div>
    </div>
  );
}
