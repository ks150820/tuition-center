import {useEffect} from 'react';
import useToast from '../../widgets/toast/toast';
import {useDispatch, useSelector} from 'react-redux';
import {
  getApiErrorData,
  getHaltedApis,
  makeApiCall,
} from '../../store/ui/http-manager';
import {AppDispatch} from '../../store/configureStore';
export const useHttpErrorHandlingService = () => {
  const {ToastView: View, callBacks, values} = useToast();
  const apiError = useSelector(getApiErrorData);
  const haltedApis = useSelector(getHaltedApis);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // if (apiError.errorMessage.length > 0) {
    //   callBacks.setMessage(apiError.errorMessage);
    //   callBacks.setHeader(apiError.errorCode);
    //   callBacks.show();
    // }
  }, [apiError, callBacks, values]);

  const retryApiCall = async () => {
    for (const iterator of haltedApis) {
      const {url, method} = JSON.parse(iterator);
      dispatch(makeApiCall(url, method));
    }
  };
  return {View, retryApiCall};
};
