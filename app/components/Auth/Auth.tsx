'use client';
import React from 'react';
import {
  createSmartAccountClient,
  BiconomySmartAccountV2,
  PaymasterMode,
} from '@biconomy/account';
import { ethers } from 'ethers';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK, IProvider } from '@web3auth/base';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

const Auth = () => {
  const [smartAccount, setSmartAccount] =
    useState<BiconomySmartAccountV2 | null>(null);
  const [smartAccountAddress, setSmartAccountAddress] = useState<string | null>(
    null
  );
  const [loggedIn, setLoggedIn] = useState(false);

  const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x13881',
    rpcTarget: 'https://polygon-mumbai.gateway.tenderly.co',
    displayName: 'Polygon Mumbai',
    blockExplorerUrl: 'https://mumbai.polygonscan.com/',
    ticker: 'MATIC',
    tickerName: 'Polygon Mumbai',
  };

  const clientId =
    'BAsaQaA7t7RsRVTzlIRwLIf9v0KRlCmcrtsWHEQZF01Sisj4YQL2JbEyhsSApGikNc7OuJ2wj3NXuozyt1yCBqU';

  const privateKeyProvider = new EthereumPrivateKeyProvider({
    config: { chainConfig },
  });

  const web3auth = new Web3Auth({
    clientId,
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    privateKeyProvider,
    uiConfig: {
      appName: 'CATME',
      mode: 'dark',
      loginMethodsOrder: ['apple', 'google', 'twitter'],
      defaultLanguage: 'en',
      loginGridCol: 3,
      primaryButton: 'socialLogin',
    },
  });

  const connect = async () => {
    try {
      await web3auth.initModal();
      const web3authProvider = await web3auth.connect();
      const ethersProvider = new ethers.providers.Web3Provider(
        web3authProvider as any
      );
      const web3AuthSigner = ethersProvider.getSigner();

      const config = {
        biconomyPaymasterApiKey:
          'B_4aZWai3.3831ffa9-0a1f-4023-b099-a4d5d1074034',
        bundlerUrl:
          'https://bundler.biconomy.io/api/v2/80001/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44',
      };

      const smartWallet = await createSmartAccountClient({
        signer: web3AuthSigner,
        biconomyPaymasterApiKey: config.biconomyPaymasterApiKey,
        bundlerUrl: config.bundlerUrl,
        rpcUrl: chainConfig.rpcTarget,
      });

      const saAddress = await smartWallet.getAccountAddress();
      web3auth.connected && setLoggedIn(true);
      setSmartAccountAddress(saAddress);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <Avatar type="default" /*onClick={avatarClick}*/ />
      ) : (
        <Button title={'LOGIN'} variant="outlined" onClick={connect}>
          SIGN IN
        </Button>
      )}
    </div>
  );
};

export default Auth;
