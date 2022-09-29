import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import asyncStorage from '../../services/async-storage-service';
import useDataTrackingService from '../../services/data-tracking-service';
import {AppDispatch} from '../../store/configureStore';
import {
  getUserLoggedInData,
  updateUserDetails,
} from '../../store/entities/auth/auth';

const useMainScreenViewController = () => {
  const isLoggedIn = useSelector(getUserLoggedInData);
  const {MoEngage} = useDataTrackingService({});
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (isLoggedIn) {
      MoEngage.setUserUniqID();
      MoEngage.initUserDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  useEffect(() => {
    asyncStorage.getData('@keyAuthData').then(value => {
      if (value != null) {
        console.log('recursive');
        dispatch(updateUserDetails(value));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {isLoggedIn};
};

export default useMainScreenViewController;
