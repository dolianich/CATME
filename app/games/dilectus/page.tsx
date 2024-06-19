import React from 'react';
import Heading from '@/app/components/Heading/Heading';
import styles from './page.module.css';

const Dilectus = () => {
  return (
    <div className={styles.wrap}>
      <Heading>DILECTUS</Heading>
      <div className={styles.alpaca}>
        <div className={styles.left}>
          <div className={styles.alpacaArt}></div>
          <div className={styles.actions}> Download and Random</div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <h3>Accessories the Alpaca</h3>
          </div>
          <div className={styles.rightBottom}>
            <h3>Styles</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dilectus;
