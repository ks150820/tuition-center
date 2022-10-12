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
import AppTheme from './src/theme/theme';
import * as Sentry from '@sentry/react-native';
import ReactMoE, {MoEAppStatus} from 'react-native-moengage';
import useAndroidPermission from '@hooks/use-permission/use-android-permission';
import MainScreen from '@screens/main-screen';
import {SENTRY_URL} from '@env';
const App = () => {
  const {requestNotificationPermission, NotificationPermissionView} =
    useAndroidPermission();
  const {NoInterNetConnectionView} = useInterNetHandlingService();
  useEffect(() => {
    Sentry.init({
      dsn: SENTRY_URL,
      // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
      // We recommend adjusting this value in production.
      tracesSampleRate: 1.0,
    });
    // ReactMoE.initialize();
    ReactMoE.initialize();
    ReactMoE.setAppStatus(MoEAppStatus.Install);
    requestNotificationPermission();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer theme={AppTheme}>
        <MainScreen />
        <NoInterNetConnectionView />
        <NotificationPermissionView />
      </NavigationContainer>
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   play: {
//     marginRight: 15,
//   },
//   fullScreen: {
//     marginRight: 10,
//   },
// });

export default Sentry.wrap(App);
