// import useNavigator from '@navigate/common/navigation';
import {useEffect, useState} from 'react';
import {Alert, BackHandler} from 'react-native';

interface IUseNavigationBackHandlerProps {
  navigation: any;
}
/**
 *
 * @returns it will handle the back button, when user will press the mobile back button, the alert pop up will come, just for confirmation to exit the screen,
 * on select YES screen will navigate to the home screen
 */
const useNavigationBackHandler = ({
  navigation,
}: IUseNavigationBackHandlerProps) => {
  // const navigate = useNavigator();
  const [onClose, setOnClose] = useState<boolean>(false);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit the test?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            setOnClose(true);
            navigation.navigate('Home');
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);

  return {onClose};
};

export default useNavigationBackHandler;
