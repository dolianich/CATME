'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './page.module.css';

const PompaDroidPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/PompaDroidBuild.loader-Hg71jPqorXuFhhapZIzVhyEnD6oJiZ.js',
    dataUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/PompaDroidBuild-sJvbqQIP29qjFl0RNGRt2uXAtMnfno.data',
    frameworkUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/PompaDroidBuild.framework-3IBknxmsusf7Ay4FdE47qYKhuTJKKY.js',
    codeUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/PompaDroidBuild-s9fMH9JaC3K8bhKPb52Rf9cz6PshHj.wasm',
  });

  return (
    <div className={styles.wrapper}>
      <Unity unityProvider={unityProvider} className={styles.gameWindow} />
    </div>
  );
};

export default PompaDroidPage;