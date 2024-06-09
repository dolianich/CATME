'use client';
import styles from './page.module.css';
import Heading from '../components/Heading/Heading';
import GameCard from '../components/GameCard/GameCard';
import {gamesData} from '../gameData/gamesData';



const play = (gameTitle: string) =>
  console.log('Play a ' + gameTitle + ' game');
const getInfo = (gameTitle: string) =>
  console.log('Show the information about the ' + gameTitle + ' game');

export default function Home() {
  return (
    <div>
      <Heading>Recommended Games</Heading>
      <div className={styles.cardsSection}>
        {gamesData.map((game) => (
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
