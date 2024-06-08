'use client';
import styles from './page.module.css';
import Heading from '../components/Heading/Heading';
import GameCard from '../components/GameCard/GameCard';
import hollowKnight from '../src/gamesImages/hollowKnight.png';
import cuphead from '../src/gamesImages/cupHead.jpeg';
import zelda from '../src/gamesImages/zelda.png';
import superMario from '../src/gamesImages/super-mario.png';

const games = [
  {
    id: '1',
    title: 'Hollow Knight',
    category: 'arcade',
    cover: hollowKnight,
    price: 'free',
    shortDescription: 'This is one line description of this game',
  },
  {
    id: '2',
    title: 'Cuphead',
    category: 'MINI-GAME',
    cover: cuphead,
    price: 'free',
  },
  { id: '3', title: 'Zelda', category: 'DEGEN', cover: zelda, price: 'free' },
  {
    id: '4',
    title: 'Super Mario',
    category: 'P2E',
    cover: superMario,
    price: 'free',
  },
  { id: '6', title: 'Unknown', category: 'P2E', price: 'free' },
  { id: '7', title: 'Unknown', category: 'P2E', price: 'free' },
  { id: '8', title: 'Unknown', category: 'P2E', price: 'free' },
  { id: '9', title: 'Unknown', category: 'P2E', price: 'free' },
  { id: '10', title: 'Unknown', category: 'P2E', price: 'free' },
  { id: '11', title: 'Unknown', category: 'P2E', price: 'free' },
  { id: '12', title: 'Unknown', category: 'P2E', price: 'free' },
  { id: '13', title: 'Unknown', category: 'P2E', price: 'free' },
];

const play = (gameTitle: string) =>
  console.log('Play a ' + gameTitle + ' game');
const getInfo = (gameTitle: string) =>
  console.log('Show the information about the ' + gameTitle + ' game');

export default function Home() {
  return (
    <div>
      <Heading>Recommended Games</Heading>
      <div className={styles.cardsSection}>
        {games.map((game) => (
          <GameCard
            key={game.id}
            infoClick={() => getInfo(game.title)}
            playClick={() => play(game.title)}
            imageUrl={game.cover}
            title={game.title}
            description={game.shortDescription}
            tagLabel={game.category}
            tagPrice={game.price}
            tagVariant={
              game.category === 'arcade'
                ? 'primary'
                : game.category === 'mini-game'
                ? 'secondary'
                : game.category === 'degen'
                ? 'tertiary'
                : 'quaternary'
            }
          />
        ))}
      </div>
    </div>
  );
}
