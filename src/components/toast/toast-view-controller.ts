import {Dimensions, Animated} from 'react-native';
import {useRef, useState} from 'react';

const useToastViewController = () => {
  const windowHeight = Dimensions.get('window').height;
  const [status, setStatus] = useState<string | null>(null);
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;

  const [failHeader, setFailHeader] = useState<string>('');
  const [failMessage, setFailMessage] = useState<string>('');
  const [successHeader, setSuccessHeader] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };

  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.15 * -1,
      duration: 300,
      useNativeDriver: true,
    }).start(popOut() as any);
  };

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * -1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };
  return {
    successHeader,
    successMessage,
    failHeader,
    failMessage,
    status,
    popAnim,
    setSuccessHeader,
    setSuccessMessage,
    setFailHeader,
    setFailMessage,
    setStatus,
    instantPopOut,
    popIn,
  };
};

export default useToastViewController;
