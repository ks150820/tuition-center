import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/configureStore';
import {
  callAuthenticationApi,
  callGetOtpApi,
} from '../../store/entities/auth/auth';

const useAuthScreenViewController = () => {
  const dispatch = useDispatch<AppDispatch>();
  const callLoginApi = () => {
    console.log('call login api');
    setTimeout(() => {
      dispatch(callAuthenticationApi());
    }, 5000);
    dispatch(callGetOtpApi());
  };
  return {callLoginApi};
};

export default useAuthScreenViewController;
