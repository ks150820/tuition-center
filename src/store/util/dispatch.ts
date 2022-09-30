import {IDispatchType} from '../../@types';
import {apiCallBegan} from '../actions/actions';
import {store} from '../configureStore';
const apiDispatch = (payload: IDispatchType) => {
  return store.dispatch({type: apiCallBegan.type, payload: payload});
};
export default apiDispatch;
