import {useEffect} from 'react';
import useToast from '../components/toast/toast';
import {useSelector} from 'react-redux';
import {getApiErrorData} from '../store/ui/http-manager';
const useHttpErrorHandlingService = () => {
  const {View, callBacks, values} = useToast();
  const apiError = useSelector(getApiErrorData);
  useEffect(() => {
    if (apiError.errorMessage.length > 0) {
      callBacks.setFailMessage(apiError.errorMessage);
      callBacks.setFailHeader(apiError.errorCode);
      callBacks.popIn();
    }
  }, [apiError, callBacks, values]);
  return View;
};

export default useHttpErrorHandlingService;
