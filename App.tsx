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
// import useInterNetHandlingService from './src/services/internet-handling-service';
import {store} from './src/store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import AppTheme from './src/theme/theme';
import * as Sentry from '@sentry/react-native';
import ReactMoE, {MoEAppStatus} from 'react-native-moengage';
import {PermissionsAndroid, NativeModules} from 'react-native';
import useAndroidPermission from '@hooks/use-android-permission';
import FeedBackContextProvider from '@components/contexts/feedback-context';
// import HomeNavigator from '@navigators/home-navigator';
import BottomTabBarNavigator from '@navigators/bottom-tab-navigator';

const App = () => {
  const {requestSinglePermission} = useAndroidPermission();
  const {InAppUpdate} = NativeModules;

  useEffect(() => {
    InAppUpdate.inAppUpdate();
  }, [InAppUpdate]);
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
  // const {NoInterNetConnectionView} = useInterNetHandlingService();
  const askPermission = async () => {
    const response = await requestSinglePermission(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.log(response, 'MANGO');

    return response;
  };

  // const dummyData = [
  //   {
  //     image: require('@assets/avatar/avatar.jpg'),
  //     text: 'I am the modal content!',
  //     url: 'https://play.google.com/store/search?q=exampur&c=apps',
  //     rating: 5,
  //   },
  //   {
  //     image: require('@assets/avatar/avatar.jpg'),
  //     text: 'I am the modal content!',
  //     url: 'https://play.google.com/store/search?q=exampur&c=apps',
  //     rating: 4,
  //   },
  //   {
  //     image: require('@assets/avatar/avatar.jpg'),
  //     text: 'I am the modal content!',
  //     url: 'HelpFeedback',
  //     rating: 3,
  //   },
  //   {
  //     image: require('@assets/avatar/avatar.jpg'),
  //     text: 'I am the modal content!',
  //     url: 'HelpFeedback',
  //     rating: 2,
  //   },
  //   {
  //     image: require('@assets/avatar/avatar.jpg'),
  //     text: 'I am the modal content!',
  //     url: 'HelpFeedback',
  //     rating: 1,
  //   },
  // ];

  return (
    <Provider store={store}>
      <FeedBackContextProvider>
        <NavigationContainer theme={AppTheme}>
          {/* <RazorpayPayment /> */}
          {/* <MyDownloads /> */}
          {/* <VideoPlayer
          // videoType={VIDEO_TYPES.LIVE_VIDEO}
          source={{
            // uri: '',
            // uri: 'https://dgrq3wfo7a6z.cloudfront.net/out/v1/87b7af39bef94f64a8a4e098a28d5799/index.m3u8',
            uri: 'https://upgadjeet-hls-encryption-testing.s3.ap-south-1.amazonaws.com/video_1635237462373_479/playlist.m3u8',
            // uri: 'https://dgrq3wfo7a6z.cloudfront.net/out/v1/b4a42e34708a4fdfa5d94f72ac8b25c6/index.m3u8',
            // uri: 'https://d15kshxka6et4q.cloudfront.net/out/v1/e9902099175d40d0a761a85ec1b49b7b/index.m3u8',
            // uri: 'https://d15kshxka6et4q.cloudfront.net/out/v1/9ae1108d8fcf453e995c1501764ce8d2/index.m3u8',
            // uri: 'https://dgrq3wfo7a6z.cloudfront.net/out/v1/c235333fda5a46e1a4ceca66f957f9ef/index.m3u8',
            // uri: 'https://upgadjeet-hls-encryption-testing.s3.ap-south-1.amazonaws.com/video_1635237462373_479/playlist.m3u8',
          }}>
          <VideoController>
            <VideoController.SeekBar />
            <UIControllerContainer>
              <UIControllerContainer.LeftControllerActions>
                <VideoController.PlayBtn style={styles.play} />
                <VideoController.VolumeMuteBtn />
              </UIControllerContainer.LeftControllerActions>
              <UIControllerContainer.RightControllerActions>
                <VideoController.FullScreenBtn
                  containerStyle={styles.fullScreen}
                />
                <VideoController.Settings>
                  <VideoController.PlaybackSpeed />
                  <VideoController.Quality />
                </VideoController.Settings>
              </UIControllerContainer.RightControllerActions>
            </UIControllerContainer>
          </VideoController>
        </VideoPlayer> */}
          {/* <HomeNavigator /> */}
          <BottomTabBarNavigator />
          {/* <FeedbackModal data={dummyData} />
          <MainScreen />
          <NoInterNetConnectionView /> */}
        </NavigationContainer>
      </FeedBackContextProvider>
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
