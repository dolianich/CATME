'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './page.module.css';
import Heading from '@/app/components/Heading/Heading';

const TheLostForestPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/TheLostForestBuild.loader-eyw3fZnEhttTHWAHTjhIrgHdcfBEzR.js',
    dataUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/TheLostForestBuild-0fIVH36MhksrfigJWc5nsbAdNwlz6P.data',
    frameworkUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/TheLostForestBuild.framework-xp64ngZlaVUbVUL86jiwdTgkQfh2hT.js',
    codeUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/TheLostForestBuild-MayETuxmW3MpdczGAc1izIeSNcLHU7.wasm',
  });

  return (
    <>
      <Heading>The Lost Forest</Heading>
      <div className={styles.wrapper}>
        <Unity unityProvider={unityProvider} className={styles.gameWindow} />
      </div>
    </>
  );
};

export default TheLostForestPage;
