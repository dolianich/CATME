'use client';
import styles from './page.module.css';
import SearchInput from './components/SearchInput/SearchInput';
import Heading from './components/Heading/Heading';
import GameCard from './components/GameCard/GameCard';
import hollowKnight from '../app/src/gamesImages/hollowKnight.png';
import cuphead from '../app/src/gamesImages/cupHead.jpeg';
import zelda from '../app/src/gamesImages/zelda.png';
import superMario from '../app/src/gamesImages/super-mario.png';

const games = [
  { title: 'Hollow Knight', category: 'ARCADE', cover: hollowKnight },
  { title: 'Cuphead', category: 'MINI-GAME', cover: cuphead },
  { title: 'Zelda', category: 'DEGEN', cover: zelda },
  { title: 'Super Mario', category: 'P2E', cover: superMario },
  { title: 'Unknown', category: 'P2E' },
  { title: 'Unknown', category: 'P2E' },
  { title: 'Unknown', category: 'P2E' },
  { title: 'Unknown', category: 'P2E' },
  { title: 'Unknown', category: 'P2E' },
  { title: 'Unknown', category: 'P2E' },
  { title: 'Unknown', category: 'P2E' },
  { title: 'Unknown', category: 'P2E' },
];

const play = (gameTitle: string) =>
  console.log('Play a ' + gameTitle + ' game');
const addToWatchlist = (gameTitle: string) =>
  console.log('Add a ' + gameTitle + ' game to watchlist');
const getInfo = (gameTitle: string) =>
  console.log('Show the information about the ' + gameTitle + ' game');

export default function Home() {
  return (
    <div>
      <Heading>Recommended Games</Heading>
      <div className={styles.cardsSection}>
        {games.map((game) => (
          <GameCard
            infoClick={() => getInfo(game.title)}
            watchClick={() => addToWatchlist(game.title)}
            playClick={() => play(game.title)}
            imageUrl={game.cover}
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
      </div>
    </div>
  );
}
