import {useDispatch, useSelector} from 'react-redux';
import {getHaltedApis, makeApiCall} from '../../store/ui/http-manager';
import {AppDispatch} from '../../store/configureStore';
export const useHttpErrorHandlingService = () => {
  const haltedApis = useSelector(getHaltedApis);
  const dispatch = useDispatch<AppDispatch>();

  const retryApiCall = async () => {
    for (const haltedApi of haltedApis) {
      const {url, method, data} = haltedApi;
      dispatch(makeApiCall(url, method, data));
      console.log(haltedApi, 'halted api .................');
    }
  };
  return {retryApiCall};
};
