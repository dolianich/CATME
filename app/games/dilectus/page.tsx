'use client';
import React from 'react';
import Heading from '@/app/components/Heading/Heading';
import styles from './page.module.css';
import Body from './components/Body/Body';
import Background from './components/Background/Background';
import Eyes from './components/Eyes/Eyes';
import { body, background, eyes } from './data/assets';
import { useState } from 'react';

const Dilectus = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);
  const [eyesIndex, setEyesIndex] = useState(0);
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
      case 'eyes':
        return eyes;
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
          case 'blue':
            return setBodyIndex(0);
          default:
            return setBodyIndex(0);
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
      case 'eyes':
        switch (name) {
          case 'normal':
            return setBackgroundIndex(0);
          default:
            return setBackgroundIndex(0);
        }
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.dilectus}>
        <Background img={background[backgroundIndex].img}></Background>
        <Body img={body[bodyIndex].anim}></Body>
        <Eyes img={eyes[eyesIndex].anim} />
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
