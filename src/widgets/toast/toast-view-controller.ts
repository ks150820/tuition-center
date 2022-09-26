import {Dimensions, Animated} from 'react-native';
import {useRef, useState} from 'react';
import {toastStatusType} from './enum';

const useToastViewController = () => {
  const windowHeight = Dimensions.get('window').height;
  const [status, setStatus] = useState<toastStatusType | null>(null);
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;

  const [header, setHeader] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };

  const show = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.15 * -1,
      duration: 300,
      useNativeDriver: true,
    }).start(popOut() as any);
  };

  const hide = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * -1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };
  return {
    header,
    message,
    status,
    popAnim,
    setHeader,
    setMessage,
    setStatus,
    hide,
    show,
  };
};

export default useToastViewController;
