'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './page.module.css';
import Button from '@/app/components/Button/Button';

const SpaceWalkPage = () => {
  const { unityProvider, requestFullscreen } = useUnityContext({
    loaderUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SpaceWalkBuild.loader-WSOzZPOgyU0y3HYUgzSMTyU112HWDw.js',
    dataUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SpaceWalkBuild-H8SP2i9DMrrcNrStbeaADFkyde17Oc.data',
    frameworkUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SpaceWalkBuild.framework-VJKBL00IR6WOM2oVl21J9YQzTBmDR8.js',
    codeUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SpaceWalkBuild-GAXcQdlG3IrbH5rFDdf6r5hTeyQ18P.wasm',
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

export default SpaceWalkPage;
