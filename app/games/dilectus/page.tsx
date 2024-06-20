'use client';
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
    }
  };

  return (
    <div className={styles.wrap}>
      <Heading>DILECTUS</Heading>
      <div>
        <Body img={body[bodyIndex].img}></Body>
        <button id='body'
          onClick={(e) => {
            setStyle();
            selectAccessoriesButton(e);
          }}
        >
          Body
        </button>

        <button onClick={() => selectStylesButton('red')}>red</button>
        <button onClick={() => selectStylesButton('green')}>green</button>
        <button onClick={() => selectStylesButton('yellow')}>yellow</button>
        <button onClick={() => selectStylesButton('blue')}>blue</button>
      </div>
    </div>
  );
};

export default Dilectus;
