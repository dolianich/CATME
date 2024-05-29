import React from 'react';
import styles from './Heading.module.css';

interface Props {
  text: string;
}

const Heading = ({ text }: Props) => {
  return <h1 className={styles.heading}>{text}</h1>;
};

export default Heading;
