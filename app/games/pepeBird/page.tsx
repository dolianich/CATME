'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './page.module.css';
import Button from '@/app/components/Button/Button';

const PepeBirdPage = () => {
  const { unityProvider, requestFullscreen } = useUnityContext({
    loaderUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/FlappyBirdBuild.loader-rSRWndPSfwsK3MOAGJ3x5kuGNqBBrc.js',
    dataUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/FlappyBirdBuild-chKfFJrdzUMRGCoYjApOjJRfsRUt3D.data',
    frameworkUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/FlappyBirdBuild.framework-GixNTSOgYRS19dvrVyRpAtEHXCMv7i.js',
    codeUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/FlappyBirdBuild-MfUod5AT38J909gusShHuaW7IR18DB.wasm',
  });

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  return (
    <div className={styles.wrapper}>
      <Unity unityProvider={unityProvider} className={styles.gameWindow} />
      <Button
        onClick={handleClickEnterFullscreen}
        title="ENTER FULL SCREEN"
        variant="outlined"
      >
        ENTER FULLSCREEN
      </Button>
    </div>
  );
};

export default PepeBirdPage;
