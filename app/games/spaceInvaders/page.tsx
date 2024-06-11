'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './page.module.css';

const SpaceInvadersPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SpaceInvadersBuild.loader-pkpjWNmlb2mJ2BzTm10Yg1FKkLOPl5.js',
    dataUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SpaceInvadersBuild-0qgVa13ZQ7SXoyXlgFufW9XYnGOJxo.data',
    frameworkUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SpaceInvadersBuild.framework-dIaJfxUHdOYz04pAH715T2fsiWMHys.js',
    codeUrl:
      'https://oghjaoh19pfhvinq.public.blob.vercel-storage.com/SpaceInvadersBuild-46PDXVj2CyPrHBamCeaqcejgL0cViN.wasm',
  });

  return (
    <div className={styles.wrapper}>
      <Unity unityProvider={unityProvider} className={styles.gameWindow} />
    </div>
  );
};

export default SpaceInvadersPage;
