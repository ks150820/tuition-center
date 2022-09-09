import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useAsyncStorageService from '../../services/async-storage-service';
import {
  getUserLoggedInData,
  updateLoginStatus,
} from '../../store/entities/auth';
import {AppDispatch} from '../../store/configureStore';

const useMainScreenViewController = () => {
  const {getData} = useAsyncStorageService({key: 'app'});
  const dispatch = useDispatch<AppDispatch>();

  const isLoggedIn = useSelector(getUserLoggedInData);
  useEffect(() => {
    returnIsLoggedIn();
  });
  const returnIsLoggedIn = () => {
    getData()
      .then(val => {
        val === 'true'
          ? dispatch(updateLoginStatus(true))
          : dispatch(updateLoginStatus(false));

        return val;
      })
      .catch(() => {
        updateLoginStatus(false);
      });
  };
  return {isLoggedIn};
};

export default useMainScreenViewController;
