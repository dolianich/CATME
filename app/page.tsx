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
  { id: '1', title: 'Hollow Knight', category: 'ARCADE', cover: hollowKnight },
  { id: '2', title: 'Cuphead', category: 'MINI-GAME', cover: cuphead },
  { id: '3', title: 'Zelda', category: 'DEGEN', cover: zelda },
  { id: '4', title: 'Super Mario', category: 'P2E', cover: superMario },
  { id: '6', title: 'Unknown', category: 'P2E' },
  { id: '7', title: 'Unknown', category: 'P2E' },
  { id: '8', title: 'Unknown', category: 'P2E' },
  { id: '9', title: 'Unknown', category: 'P2E' },
  { id: '10', title: 'Unknown', category: 'P2E' },
  { id: '11', title: 'Unknown', category: 'P2E' },
  { id: '12', title: 'Unknown', category: 'P2E' },
  { id: '13', title: 'Unknown', category: 'P2E' },
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
      <Heading>Recommend Games</Heading>
      <div className={styles.cardsSection}>
        {games.map((game) => (
          <GameCard
            key={game.id}
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
