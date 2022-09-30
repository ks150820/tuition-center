import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/configureStore';
import {callAuthenticationApi, callGetOtpApi} from '../../store/entities/auth';

const useAuthScreenViewController = () => {
  const dispatch = useDispatch<AppDispatch>();

  const callLoginApi = () => {
    setTimeout(() => {
      dispatch(callAuthenticationApi());
    }, 5000);
    dispatch(callGetOtpApi());
  };
  const retryLogin = () => {};
  return {callLoginApi, retryLogin};
};

export default useAuthScreenViewController;
