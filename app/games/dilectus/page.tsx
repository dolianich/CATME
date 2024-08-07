'use client';
import React from 'react';
import styles from './page.module.css';
import Body from './components/Body/Body';
import Background from './components/Background/Background';
import Eyes from './components/Eyes/Eyes';
import Fren from './components/Fren/Fren';
import { body, background, eyes, fren } from './data/assets';
import { useState } from 'react';
import CategoryButton from './UIcomponents/CategoryButton';
import ItemButton from './UIcomponents/ItemButton/ItemButton';
import bodyIcon from './data/src/general/bodyIcon.svg';
import eyesIcon from './data/src/general/eyesIcon.svg';
import bgIcon from './data/src/general/bgIcon.svg';
import frenIcon from './data/src/general/frenIcon.svg';
import MainMenu from './components/MainMenu/MainMenu';
import Info from './components/Info/Info';
import GameComponent from './components/GameComponent/GameComponent';

const Dilectus = () => {
  const [isReload, setIsReload] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);
  const [eyesIndex, setEyesIndex] = useState(0);
  const [frenIndex, setFrenIndex] = useState(0);
  const [selectedAccessory, setSelectedAccessory] = useState('body');
  const [selectedStyle, setSelectedStyle] = useState(null);

  const [isMode, setIsMode] = useState('create');

  const play = () => {
    setIsMode('play');
  };

  const feed = () => {
    setIsMode('feed');
    setEyesIndex(10);
    setTimeout(() => {
      setEyesIndex(0);
      setIsMode('stats');
      setIsReload(!!isReload);
    }, 1900);
  };

  const create = () => {
    setIsMode('create');
  };

  const sleep = () => {
    setIsMode('sleep');
    setEyesIndex(9);
    setTimeout(() => {
      setEyesIndex(0);
      setIsMode('stats');
      setIsReload(!!isReload);
    }, 3000);
  };

  const stats = () => {
    setIsMode('stats');
  };

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
          case 'sleep':
            return setEyesIndex(9);
          case 'eat':
            return setEyesIndex(10);
        }
      case 'fren':
        switch (name) {
          case 'shroom':
            return setFrenIndex(0);
          case 'snail':
            return setFrenIndex(1);
          case 'frog':
            return setFrenIndex(2);
          default:
            return setFrenIndex(0);
        }
    }
  };

  return (
    <>
      <MainMenu
        onClickStats={stats}
        onClickPlay={play}
        onClickCreate={create}
        onClickFeed={() => {
          reload();
          feed();
        }}
        onClickSleep={() => {
          reload();
          sleep();
        }}
      />
      {isMode === 'play' ? (
        <GameComponent />
      ) : (
        <div className={styles.wrap}>
          <div className={styles.dilectus}>
            <Background img={background[backgroundIndex].img}></Background>
            <Fren img={fren[frenIndex].anim}></Fren>
            {isReload && <Body img={body[bodyIndex].anim} />}
            {!isReload && <Body img={body[bodyIndex].anim} />}
            {isReload && <Eyes img={eyes[eyesIndex].anim} />}
            {!isReload && <Eyes img={eyes[eyesIndex].anim} />}
          </div>

          {isMode === 'create' ? (
            <div className={styles.edit}>
              <div className={styles.style}>
                <CategoryButton
                  img={bodyIcon}
                  id="body"
                  imgId="body"
                  type={selectedAccessory === 'body' ? 'selected' : 'default'}
                  onClick={(e) => {
                    setStyle();
                    selectAccessoriesButton(e);
                  }}
                ></CategoryButton>

                <CategoryButton
                  img={bgIcon}
                  id="background"
                  imgId="background"
                  type={
                    selectedAccessory === 'background' ? 'selected' : 'default'
                  }
                  onClick={(e) => {
                    setStyle();
                    selectAccessoriesButton(e);
                  }}
                ></CategoryButton>

                <CategoryButton
                  img={eyesIcon}
                  id="eyes"
                  imgId="eyes"
                  type={selectedAccessory === 'eyes' ? 'selected' : 'default'}
                  onClick={(e) => {
                    setStyle();
                    selectAccessoriesButton(e);
                  }}
                ></CategoryButton>

                <CategoryButton
                  img={frenIcon}
                  id="fren"
                  imgId="fren"
                  type={selectedAccessory === 'fren' ? 'selected' : 'default'}
                  onClick={(e) => {
                    setStyle();
                    selectAccessoriesButton(e);
                  }}
                ></CategoryButton>
              </div>

              <div className={styles.accessory}>
                {setStyle() &&
                  setStyle()?.map((item, index) =>
                    item.name === 'sleep' || item.name === 'eat' ? (
                      <></>
                    ) : item.name === 'none' ? (
                      <div key={index} className={styles.empty}></div>
                    ) : (
                      <ItemButton
                        type={
                          (selectedAccessory === 'body' &&
                            item.id === bodyIndex) ||
                          (selectedAccessory === 'background' &&
                            item.id === backgroundIndex) ||
                          (selectedAccessory === 'eyes' &&
                            item.id === eyesIndex) ||
                          (selectedAccessory === 'fren' &&
                            item.id === frenIndex)
                            ? 'selected'
                            : 'default'
                        }
                        img={item.button}
                        key={index}
                        onClick={() => {
                          selectStylesButton(item.name);
                          reload();
                        }}
                      />
                    )
                  )}
              </div>
            </div>
          ) : isMode === 'feed' || isMode === 'sleep' || isMode === 'stats' ? (
            <Info />
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default Dilectus;
