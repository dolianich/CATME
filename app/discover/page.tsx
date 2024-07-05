'use client';
import styles from './page.module.css';
import Heading from '../components/Heading/Heading';
import GameCard from '../components/GameCard/GameCard';
import { gamesData } from '../gameData/gamesData';
import { useRouter } from 'next/navigation';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import DilectusBanner from '../components/DilectusBanner/DilectusBanner';

export default function Home() {
  const router = useRouter();
  const playClick = (path: any) => router.push(`/games/${path}`);
  return (
    <div>
      <DilectusBanner />
      <Heading>Recommended Games</Heading>
      <div className={styles.cardsSection}>
        {gamesData.slice(0, 3).map((game) => (
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
      <HeroBanner />
    </div>
  );
}
