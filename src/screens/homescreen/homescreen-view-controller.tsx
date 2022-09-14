import {useDispatch} from 'react-redux';
import {callAPi, callRetry} from '../../store/entities/auth';
import {AppDispatch} from '../../store/configureStore';
import {useEffect} from 'react';
import useDataTrackingService from '../../services/data-tracking-service';

// import {postNavigationProp} from '../../navigators/post-auth-navigator/@types/post-auth-param-list';;
/**
 * View Controller for Homescreen
 * @param props
 * @returns
 */
const useHomeScreenViewController = () => {
  let data = {
    course_id: 'course_id',
    item: 'item',
  };
  const dataToTrack = useDataTrackingService(data, true);
  useEffect(() => {
    console.log(dataToTrack, 'data to track');
  }, [dataToTrack]);
  const dispatch = useDispatch<AppDispatch>();

  const onPress = () => {
    // console.log('call.');
    dispatch(callAPi());
  };

  const onRetry = () => {
    dispatch(callRetry());
  };
  return {onPress, onRetry};
};

export default useHomeScreenViewController;
