'use client';
import React from 'react';
import Heading from '@/app/components/Heading/Heading';
import styles from './page.module.css';
import Body from './components/Body/Body';
import Background from './components/Background/Background';
import { body, background } from './data/assets';
import { useState } from 'react';

const Dilectus = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);
  const [selectedAccessory, setSelectedAccessory] = useState('body');
  const [selectedStyle, setSelectedStyle] = useState(null);

  const selectAccessoriesButton = (event: any) => {
    const selection = event.target.id;
    setSelectedAccessory(selection);
  };

  const setStyle = () => {
    if (selectedAccessory === null) {
      return null;
    }
    switch (selectedAccessory) {
      case 'body':
        return body;
      case 'background':
        return background;
    }
  };

  const selectStylesButton = (name: any) => {
    if (selectedAccessory === null) {
      return null;
    }
    setSelectedStyle(name);
    switch (selectedAccessory) {
      case 'body':
        switch (name) {
          case 'red':
            return setBodyIndex(0);
          case 'green':
            return setBodyIndex(1);
          case 'yellow':
            return setBodyIndex(2);
          case 'blue':
            return setBodyIndex(3);
          default:
            return setBodyIndex(3);
        }
      case 'background':
        switch (name) {
          case 'forest':
            return setBackgroundIndex(0);
          case 'mountains':
            return setBackgroundIndex(1);
          case 'desert':
            return setBackgroundIndex(2);
          default:
            return setBackgroundIndex(0);
        }
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.dilectus}>
        <Background img={background[backgroundIndex].img}></Background>
        <Body img={body[bodyIndex].img}></Body>
      </div>

      <div className={styles.edit}>
        <div className={styles.style}>
          <button
            id="body"
            onClick={(e) => {
              setStyle();
              selectAccessoriesButton(e);
            }}
          >
            Body
          </button>
          <button
            id="background"
            onClick={(e) => {
              setStyle();
              selectAccessoriesButton(e);
            }}
          >
            background
          </button>
        </div>

        <div className={styles.accessory}>
          {setStyle() &&
            setStyle()?.map((item, index) => (
              <button key={index} onClick={() => selectStylesButton(item.name)}>
                {item.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dilectus;
