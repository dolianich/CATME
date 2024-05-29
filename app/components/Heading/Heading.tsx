import React from 'react';
import styles from './Heading.module.css';

interface Props {
  children: string;
}

const Heading = ({ children }: Props) => {
  return <h1 className={styles.heading}>{children}</h1>;
};

export default Heading;
