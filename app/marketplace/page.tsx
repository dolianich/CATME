import React from 'react';
import Link from 'next/link';
import DevAnim from '../components/DevAnim/DevAnim';
import styles from './page.module.css';

const MarketplacePage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>BUIDLING!</h1>
      <p>This section is under development</p>
      <DevAnim />
      <Link href={'/'} className={styles.link}>
        Back to the Dashboard
      </Link>
    </div>
  );
};

export default MarketplacePage;
