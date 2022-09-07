import {requestMethodType} from '../@types/api/api';
import {apiCallBegan} from '../actions/actions';
import {store} from '../configureStore';
import {CACHING_TIME} from '../enum';
interface IDispatchType {
  url: string;
  method: requestMethodType;
  onStart: string;
  onSuccess: string;
  onError: string;
  lastCalledTime: number;
  cacheValidityDuration: CACHING_TIME; // 10 minutes will be recommended
}

const storeDispatch = (payload: IDispatchType) => {
  return store.dispatch({type: apiCallBegan.type, payload: payload});
};
export default storeDispatch;
