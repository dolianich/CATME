import React from 'react';
import notFound from './src/images/NotFound.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './notFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1>MEOWCK!</h1>
      <p>Seems like this page does not exist</p>
      <Image
        src={notFound}
        alt={'Not Found'}
        width={350}
        height={350}
        quality={100}
        className={styles.image}
      />
      <Link href={'/'} className={styles.link}>
        Back to the Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
