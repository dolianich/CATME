'use client';
import React from 'react';
import Heading from '@/app/components/Heading/Heading';
import styles from './page.module.css';
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
      <div className={styles.dilectus}>
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
