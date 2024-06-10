'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const SpaceWalkPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'https://github.com/dolianich/CATME/blob/c426871aae8a0f503a7d07148c519ebf5008f7ce/public/SpaceWalkBuild/Build/SpaceWalkBuild.loader.js',
    dataUrl: 'public/SpaceWalkBuild/Build/SpaceWalkBuild.data',
    frameworkUrl:
      'public/SpaceWalkBuild/Build/SpaceWalkBuild.framework.js',
    codeUrl: 'app/src/SpaceWalkBuild/Build/SpaceWalkBuild.wasm',
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
  );
};

export default SpaceWalkPage;
