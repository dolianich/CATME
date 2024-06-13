'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './page.module.css';
import Button from '@/app/components/Button/Button';

const FroggerPage = () => {
  const { unityProvider, requestFullscreen } = useUnityContext({
    loaderUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/FroggerBuild.loader-fPMOeYVLO66n4xheanv5m9Z6kXnkfF.js',
    dataUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/FroggerBuild-I70Ds1zBi6E3181Xeb2AqQvdNbpnBB.data',
    frameworkUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/FroggerBuild.framework-NPvdG6eg4wQfRmH48UyVHgZnO9wgQe.js',
    codeUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/FroggerBuild-JieW5Vine0DmhV54fSXV6fDeGPOuql.wasm',
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

export default FroggerPage;
