/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import useInterNetHandlingService from './src/services/internet-handling-service';
import {store} from './src/store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import Config from 'react-native-config';
import MainScreen from './src/screens/main-screen';

const App = () => {
  const {isConnected, NoInterNetConnectionView} = useInterNetHandlingService();
  useEffect(() => {
    console.log(isConnected, 'is Connected 34');
  }, [isConnected]);
  console.log(Config.API, 'API SERVICE');

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainScreen />
        <NoInterNetConnectionView />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
