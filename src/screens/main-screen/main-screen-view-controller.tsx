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
  useEffect(() => {
    if (isLoggedIn) {
      MoEngage.setUserUniqID();
      MoEngage.initUserDetails();
      console.log('USE EFFECT');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  const dispatch = useDispatch<AppDispatch>();
  asyncStorage.getData().then(value => {
    if (value != null) {
      dispatch(updateUserDetails(value));
    }
  });

  return {isLoggedIn};
};

export default useMainScreenViewController;
