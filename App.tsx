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
import MainScreen from './src/screens/main-screen';
import AppTheme from './src/theme/theme';
import {ENV_VAR} from '@env';
import {initFirebase} from './src/services/firebase-services';
import * as Sentry from '@sentry/react-native';
const App = () => {
  Sentry.init({
    dsn: 'https://6c631e420b2744b8a2303cee731cb4e7@o1054483.ingest.sentry.io/6743885',
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
  });
  const {NoInterNetConnectionView} = useInterNetHandlingService();
  // console.log(ENV_VAR);
  useEffect(() => {
    console.log(ENV_VAR);
    initFirebase();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer theme={AppTheme}>
        <MainScreen />
        <NoInterNetConnectionView />
      </NavigationContainer>
    </Provider>
  );
};

export default Sentry.wrap(App);
