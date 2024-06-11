'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './page.module.css';

const DeathDungeonPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/DeathDungeonBuild.loader-RWoJ54SQa8XZPK9pHdAZYClaW8ZNa7.js',
    dataUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/DeathDungeonBuild-OYiBUEp4qm2RufeOXhcIQ6CDrEAxTX.data',
    frameworkUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/DeathDungeonBuild.framework-oT5fdUNmSmt5xaZbD7wcu7pk9YVfAJ.js',
    codeUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/DeathDungeonBuild-rO17rf9pRjSr2A2uRjTh0C9LTb70zO.wasm',
  });

  return (
    <div className={styles.wrapper}>
      <Unity unityProvider={unityProvider} className={styles.gameWindow} />
    </div>
  );
};

export default DeathDungeonPage;