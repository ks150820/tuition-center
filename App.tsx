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
// import MainScreen from './src/screens/main-screen';
import AppTheme from './src/theme/theme';
import * as Sentry from '@sentry/react-native';
import ReactMoE, {MoEAppStatus} from 'react-native-moengage';
import {PermissionsAndroid} from 'react-native';
import useAndroidPermission from '@hooks/use-android-permission';
import HomeNavigator from '@navigators/home-navigator';
// import MyDownloads from '@screens/a-temp-download/MyDownloads';
const App = () => {
  const {requestSinglePermission} = useAndroidPermission();
  useEffect(() => {
    Sentry.init({
      dsn: 'https://6c631e420b2744b8a2303cee731cb4e7@o1054483.ingest.sentry.io/6743885',
      // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
      // We recommend adjusting this value in production.
      tracesSampleRate: 1.0,
    });
    // ReactMoE.initialize();
    ReactMoE.initialize();
    ReactMoE.setAppStatus(MoEAppStatus.Install);
    let response = askPermission();
    console.log(response, 'RES>>>>>>>>>');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {NoInterNetConnectionView} = useInterNetHandlingService();
  const askPermission = async () => {
    const response = await requestSinglePermission(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.log(response, 'MANGO');

    return response;
  };
  return (
    <Provider store={store}>
      <NavigationContainer theme={AppTheme}>
        {/* <MyDownloads /> */}
        <HomeNavigator />
        {/* <MainScreen /> */}
        <NoInterNetConnectionView />
      </NavigationContainer>
    </Provider>
  );
};

export default Sentry.wrap(App);
