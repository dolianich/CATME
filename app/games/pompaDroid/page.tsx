'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './page.module.css';
import Button from '@/app/components/Button/Button';
import Heading from '@/app/components/Heading/Heading';

const PompaDroidPage = () => {
  const { unityProvider, requestFullscreen } = useUnityContext({
    loaderUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/PompaDroidBuild.loader-Hg71jPqorXuFhhapZIzVhyEnD6oJiZ.js',
    dataUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/PompaDroidBuild-sJvbqQIP29qjFl0RNGRt2uXAtMnfno.data',
    frameworkUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/PompaDroidBuild.framework-3IBknxmsusf7Ay4FdE47qYKhuTJKKY.js',
    codeUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/PompaDroidBuild-s9fMH9JaC3K8bhKPb52Rf9cz6PshHj.wasm',
  });

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  return (
    <>
      <Heading>Pompa Droid</Heading>
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
    </>
  );
};

export default PompaDroidPage;
