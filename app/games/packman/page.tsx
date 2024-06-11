'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './page.module.css';

const PackmanPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/PackmanBuild.loader-hxrjHV6ibOtu05jVSdy7FNQBfNZ4Yt.js',
    dataUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/PackmanBuild-0gJ7OQmhRGKtp4qNfE5HnSPA9SkAh2.data',
    frameworkUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/PackmanBuild.framework-gJDkBQDSQ6vYBctvWY9GN7YSXHEObi.js',
    codeUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/PackmanBuild-inKMVg96Y04aqfvkOOZ9DiJSGSTlbs.wasm',
  });

  return (
    <div className={styles.wrapper}>
      <Unity unityProvider={unityProvider} className={styles.gameWindow} />
    </div>
  );
};

export default PackmanPage;
