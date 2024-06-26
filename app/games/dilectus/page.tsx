'use client';
import React from 'react';
import styles from './page.module.css';
import Body from './components/Body/Body';
import Background from './components/Background/Background';
import Eyes from './components/Eyes/Eyes';
import Fren from './components/Fren/Fren';
import { body, background, eyes, fren } from './data/assets';
import { useState } from 'react';

const Dilectus = () => {
  const [isReload, setIsReload] = useState(true);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);
  const [eyesIndex, setEyesIndex] = useState(0);
  const [frenIndex, setFrenIndex] = useState(0);
  const [selectedAccessory, setSelectedAccessory] = useState('body');
  const [selectedStyle, setSelectedStyle] = useState(null);

  const reload = () => {
    setIsReload(!isReload);
  };

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
      case 'fren':
        return fren;
    }
  };

  const selectStylesButton = (name: any) => {
    setSelectedStyle(name);
    switch (selectedAccessory) {
      case 'body':
        switch (name) {
          case 'blue':
            return setBodyIndex(0);
          case 'red':
            return setBodyIndex(1);
          case 'green':
            return setBodyIndex(2);
          case 'purple':
            return setBodyIndex(3);
          case 'yellow':
            return setBodyIndex(4);
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
            return setEyesIndex(0);
          case 'angry':
            return setEyesIndex(1);
          default:
            return setEyesIndex(0);
        }
      case 'fren':
        switch (name) {
          case 'shroom':
            return setFrenIndex(0);
          default:
            return setFrenIndex(0);
        }
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.dilectus}>
        <Background img={background[backgroundIndex].img}></Background>
        <Fren img={fren[frenIndex].anim}></Fren>
        {isReload && <Body img={body[bodyIndex].anim}></Body>}
        {!isReload && <Body img={body[bodyIndex].anim}></Body>}
        {isReload && <Eyes img={eyes[eyesIndex].anim} />}
        {!isReload && <Eyes img={eyes[eyesIndex].anim} />}
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

          <button
            id="eyes"
            onClick={(e) => {
              setStyle();
              selectAccessoriesButton(e);
            }}
          >
            eyes
          </button>
        </div>

        <div className={styles.accessory}>
          {setStyle() &&
            setStyle()?.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  selectStylesButton(item.name);
                  reload();
                }}
              >
                {item.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dilectus;
