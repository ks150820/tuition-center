import {ToastAndroid} from 'react-native';

const UIToast = (message: string): null => {
  ToastAndroid.showWithGravityAndOffset(
    message ? message : '',
    ToastAndroid.LONG,
    ToastAndroid.TOP,
    25,
    150,
  );
  return null;
};

export default UIToast;
