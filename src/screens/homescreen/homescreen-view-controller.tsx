import {useNavigation} from '@react-navigation/native';
import {myCourseNavigationProps} from '../../navigators/home-navigator/@types/home-navigator-param-list';
// import {postNavigationProp} from '../../navigators/post-auth-navigator/@types/post-auth-param-list';

/**
 * View Controller for Homescreen
 * @param props
 * @returns
 */
const useHomeScreenViewController = () => {
  const navigation = useNavigation<myCourseNavigationProps>();
  const onPress = () => {
    console.log('call.');
    navigation.navigate('MyCourse', {courseList: ['A', 'B']});
  };
  return {onPress};
};

export default useHomeScreenViewController;
