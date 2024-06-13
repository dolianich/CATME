'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './page.module.css';

const FlappyBirdPage = () => {
  const { unityProvider, requestFullscreen } = useUnityContext({
    loaderUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/FlappyBirdBuild.loader-vECeUyE7LVgt6jcR0w6I5q1cl6j0pw.js',
    dataUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/FlappyBirdBuild-reXTCaNTKyn6u2sHFe8Y1rGfnFAPcb.data',
    frameworkUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/FlappyBirdBuild.framework-KzXdVg8FDaImySM5v1nHXK9jmbJkg0.js',
    codeUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/FlappyBirdBuild-QXTaU1Vtvez24aBAK3ka1UaFlMptYs.wasm',
  });

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  return (
    <div className={styles.wrapper}>
      <Unity unityProvider={unityProvider} className={styles.gameWindow} />
      <button onClick={handleClickEnterFullscreen}>Enter Fullscreen</button>
    </div>
  );
};

export default FlappyBirdPage;
