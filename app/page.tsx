import Image from 'next/image';
import styles from './page.module.css';
import Button from './components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Button variant="secondary" title={''}>
        START PLAYING
      </Button>
      <Button variant="primary" title={''}>
        START PLAYING
      </Button>
      <Button variant="tertiary" title={''}>
        START PLAYING
      </Button>
      <Button variant="quaternary" title={''}>
        START PLAYING
      </Button>
    </div>
  );
}
