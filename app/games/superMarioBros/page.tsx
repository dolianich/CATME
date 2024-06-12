'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './page.module.css';

const SuperMarioPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SuperMarioBuild.loader-sGJUIRFkm9onzTBw4joZd9f6NcP4PG.js',
    dataUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SuperMarioBuild-Eu9romy63RUWGyKOucqRPtgkiPVGkS.data',
    frameworkUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SuperMarioBuild.framework-6t6hyf1uohtBidmkTf9ZnSAzNWeDae.js',
    codeUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SuperMarioBuild-Up8dVMHmtjkfL4bFypgjL2ja7ejNha.wasm',
  });

  return (
    <div className={styles.wrapper}>
      <Unity unityProvider={unityProvider} className={styles.gameWindow} />
    </div>
  );
};

export default SuperMarioPage;
