import {useDispatch, useSelector} from 'react-redux';
import asyncStorage from '../../services/async-storage-service';
import {AppDispatch} from '../../store/configureStore';
import {
  getUserLoggedInData,
  updateUserDetails,
} from '../../store/entities/auth/auth';

const useMainScreenViewController = () => {
  const isLoggedIn = useSelector(getUserLoggedInData);
  const dispatch = useDispatch<AppDispatch>();
  asyncStorage.getData().then(value => {
    if (value != null) {
      dispatch(updateUserDetails(value));
    }
  });

  return {isLoggedIn};
};

export default useMainScreenViewController;
