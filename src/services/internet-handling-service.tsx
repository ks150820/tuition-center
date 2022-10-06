import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
// import NoInternetConnection from '@components/no-internet-connection-handle';

const useInterNetHandlingService = () => {
  const [isConnected, setSsConnected] = useState<boolean | null>(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setSsConnected(state.isConnected || null);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const NoInterNetConnectionView = () => {
    return isConnected ? null : <></>;
  };
  return {isConnected, NoInterNetConnectionView};
};

export default useInterNetHandlingService;
