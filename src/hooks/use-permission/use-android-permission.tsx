import PermissionView from '@components/permission/permission-view';
import React, {useState} from 'react';
import {PermissionsAndroid} from 'react-native';

const useAndroidPermission = () => {
  const [isViewVisible, setIsViewVisible] = useState(false);
  const [isNeverAskAgain, setIsNeverAskAgain] = useState(false);
  const request = async () =>
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATION,
    );

  const NotificationPermissionView = () => (
    <PermissionView
      isNeverAskAgain={isNeverAskAgain}
      isViewVisible={isViewVisible}
      requestPermission={requestNotificationPermission}
      setIsViewVisible={setIsViewVisible}
    />
  );
  const requestNotificationPermission = async () => {
    try {
      const granted = await request();
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setIsViewVisible(false);
      } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
        setIsViewVisible(true);
      } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        setIsNeverAskAgain(true);
        setIsViewVisible(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {requestNotificationPermission, NotificationPermissionView};
};

export default useAndroidPermission;
