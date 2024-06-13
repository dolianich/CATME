'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './page.module.css';
import Button from '@/app/components/Button/Button';

const SuperMarioPage = () => {
  const { unityProvider, requestFullscreen } = useUnityContext({
    loaderUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SuperMarioBuild.loader-sGJUIRFkm9onzTBw4joZd9f6NcP4PG.js',
    dataUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SuperMarioBuild-Eu9romy63RUWGyKOucqRPtgkiPVGkS.data',
    frameworkUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SuperMarioBuild.framework-6t6hyf1uohtBidmkTf9ZnSAzNWeDae.js',
    codeUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SuperMarioBuild-Up8dVMHmtjkfL4bFypgjL2ja7ejNha.wasm',
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

export default SuperMarioPage;
