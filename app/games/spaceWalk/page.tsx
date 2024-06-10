'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const SpaceWalkPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: '../../../public/SpaceWalkBuild/Build/SpaceWalkBuild.loader.js',
    dataUrl: '../../../public/SpaceWalkBuild/Build/SpaceWalkBuild.data',
    frameworkUrl:
      '../../../public/SpaceWalkBuild/Build/SpaceWalkBuild.framework.js',
    codeUrl: '../../../public/SpaceWalkBuild/Build/SpaceWalkBuild.wasm',
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
  );
};

export default SpaceWalkPage;
