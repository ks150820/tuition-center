import {PermissionsAndroid, Permission} from 'react-native';

const useAndroidPermission = () => {
  const requestSinglePermission = async (permission: Permission) => {
    try {
      const granted = await PermissionsAndroid.request(permission, {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return 'GRANTED';
      } else {
        if (granted === PermissionsAndroid.RESULTS.DENIED) {
          return 'DENIED';
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return {requestSinglePermission};
};

export default useAndroidPermission;
