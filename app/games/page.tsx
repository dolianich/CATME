'use client';
import styles from './page.module.css';
import Heading from '../components/Heading/Heading';
import GameCard from '../components/GameCard/GameCard';
import { gamesData } from '../gameData/gamesData';
import { useRouter } from 'next/navigation';

export default function GamePage() {
  const router = useRouter();
  const playClick = (path: any) => router.push(`/games/${path}`);
  return (
    <div>
      <Heading>Games</Heading>
      <div className={styles.cardsSection}>
        {gamesData.map((game) => (
          <GameCard
            key={game.id}
            onClick={() => playClick(game.path)}
            imageUrl={game.cover}
            title={game.title}
            description={game.shortDescription}
            tagLabel={game.category}
            tagPrice={game.price}
            tagVariant="secondary"
          />
        ))}
      </div>
    </div>
  );
}
