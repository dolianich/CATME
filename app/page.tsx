import Image from 'next/image';
import styles from './page.module.css';
import Button from './components/Button/Button';
import { Fish, Trophy } from '@phosphor-icons/react/dist/ssr';
import Logo from './components/Logo/Logo';
import NavButton from './components/NavButton';

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
      <Fish weight="duotone" />
      <Trophy size={24} weight="fill" />
      <Logo />
      <NavButton
        text="Home"
        icon={Fish}
        href="/"
        size={24}
        weight="duotone"
      ></NavButton>
      <NavButton text="Home" icon={Trophy} href="/" size={32}></NavButton>
    </div>
  );
}
