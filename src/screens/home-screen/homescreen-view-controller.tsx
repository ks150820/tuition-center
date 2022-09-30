import {useDispatch} from 'react-redux';
import {callRetry} from '../../store/entities/auth';
import {AppDispatch} from '../../store/configureStore';
import useDataTrackingService from '../../services/data-tracking-service';
import {useEffect} from 'react';

// import {postNavigationProp} from '../../navigators/post-auth-navigator/@types/post-auth-param-list';;
/**
 * View Controller for Homescreen
 * @param props
 * @returns
 */
const useHomeScreenViewController = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {MoEngage} = useDataTrackingService({});

  useEffect(() => {}, []);
  const onPress = () => {
    MoEngage.trackUserEvents('Home page new app', {
      user: 'Ramees',
      Phone: '7356704543',
    });
  };

  const onRetry = () => {
    dispatch(callRetry());
    // retryApiCall();
  };
  return {onPress, onRetry};
};

export default useHomeScreenViewController;
