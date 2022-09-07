import {requestMethodType} from '../@types/api/api';
import {apiCallBegan} from '../actions/actions';
import {store} from '../configureStore';
interface IDispatchType {
  url: string;
  method: requestMethodType;
  onStart: string;
  onSuccess: string;
  onError: string;
  lastCalledTime: number;
  cacheValidityDuration: 0 | 5 | 10 | 15 | number; // 10 minutes will be recommended
}

const storeDispatch = (payload: IDispatchType) => {
  return store.dispatch({type: apiCallBegan.type, payload: payload});
};
export default storeDispatch;
