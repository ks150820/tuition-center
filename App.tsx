/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import useInterNetHandlingService from './src/services/internet-handling-service';
import {store} from './src/store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './src/screens/main-screen';
import AppTheme from './src/theme/theme';

const App = () => {
  const {NoInterNetConnectionView} = useInterNetHandlingService();

  return (
    <Provider store={store}>
      <NavigationContainer theme={AppTheme}>
        <MainScreen />
        <NoInterNetConnectionView />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
