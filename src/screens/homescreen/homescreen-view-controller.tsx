import {useDispatch} from 'react-redux';
import {callAPi, callRetry} from '../../store/auth';
import {AppDispatch} from '../../store/configureStore';
// import {postNavigationProp} from '../../navigators/post-auth-navigator/@types/post-auth-param-list';

/**
 * View Controller for Homescreen
 * @param props
 * @returns
 */
const useHomeScreenViewController = () => {
  // const navigation = useNavigation<myCourseNavigationProps>();
  const dispatch = useDispatch<AppDispatch>();

  const onPress = () => {
    console.log('call.');
    dispatch(callAPi());
    // navigation.navigate('MyCourse', {courseList: ['A', 'B']});
  };

  const onRetry = () => {
    dispatch(callRetry());
  };
  return {onPress, onRetry};
};

export default useHomeScreenViewController;
