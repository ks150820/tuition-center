import {useEffect} from 'react';
import useToast from '../components/toast/toast';
import {useSelector} from 'react-redux';
import {
  getApiErrorData,
  getHaltedApis,
  makeApiCall,
} from '../store/ui/http-manager';
export const useHttpErrorHandlingService = () => {
  const {View, callBacks, values} = useToast();
  const apiError = useSelector(getApiErrorData);
  // const dispatch = useDispatch();
  const haltedApis = useSelector(getHaltedApis);
  useEffect(() => {
    if (apiError.errorMessage.length > 0) {
      callBacks.setFailMessage(apiError.errorMessage);
      callBacks.setFailHeader(apiError.errorCode);
      callBacks.popIn();
    }
  }, [apiError, callBacks, values]);

  const retryApiCall = async () => {
    for (const iterator of haltedApis) {
      const {url, method} = JSON.parse(iterator);
      makeApiCall(url, method);
    }
  };
  return {View, retryApiCall};
};
