import {useDispatch} from 'react-redux';
import {useHttpErrorHandlingService} from '../../services/http/http-error-handling-service';
import {AppDispatch} from '../../store/configureStore';
import {callAuthenticationApi, callGetOtpApi} from '../../store/entities/auth';

const useAuthScreenViewController = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {retryApiCall} = useHttpErrorHandlingService();

  const callLoginApi = () => {
    setTimeout(() => {
      dispatch(callAuthenticationApi());
    }, 5000);
    dispatch(callGetOtpApi());
  };
  const retryLogin = () => {
    retryApiCall();
  };
  return {callLoginApi, retryLogin};
};

export default useAuthScreenViewController;
