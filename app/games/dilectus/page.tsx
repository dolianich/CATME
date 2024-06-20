import React from 'react';
import Heading from '@/app/components/Heading/Heading';
import styles from './page.module.css';
import Button from '@/app/components/Button/Button';
import Body from './components/Body/Body';
import { body } from './data/assets';
import { useState } from 'react';

const Dilectus = () => {
  const [bodyIndex, setBodyIndex] = useState(0);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);

  const selectAccessoriesButton = (event: any) => {
    const selection = event.target.innerText;
    setSelectedAccessory(selection);
  };

  const selectedStylesButton = (name: any) => {
    setSelectedStyle(name);
    switch (selectedAccessory) {
      case 'Body':
        switch (name) {
          case 'Red':
            return setBodyIndex(0);
          case 'Green':
            return setBodyIndex(1);
          case 'Yellow':
            return setBodyIndex(2);
          case 'Blue':
            return setBodyIndex(3);
          default:
            return setBodyIndex(0);
        }
    }
  };

  return (
    <div className={styles.wrap}>
      <Heading>DILECTUS</Heading>
    </div>
  );
};

export default Dilectus;
