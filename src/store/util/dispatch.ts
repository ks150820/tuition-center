import {apiCallBegan} from '../actions/actions';
import {store} from '../configureStore';
interface IDispatchType {
  url: string;
  method: string;
  onStart: string;
  onSuccess: string;
  onError: string;
  lastCalledTime: number;
  cacheValidityDuration: number;
}

const storeDispatch = (payload: IDispatchType) => {
  return store.dispatch({type: apiCallBegan.type, payload: payload});
};
export default storeDispatch;
