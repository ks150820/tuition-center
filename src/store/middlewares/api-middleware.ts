import {AppDispatch, RootState, store} from '../configureStore';
import * as actions from '../actions/actions';
import axios from 'axios';
import apiQueue from '../config/apiQueue';

export interface thunkType {
  dispatch: AppDispatch;
  getState: RootState;
}

const makeRequest = (payload: {
  url: string;
  onError: string;
  onStart: string;
  onSuccess: string;
  lastCalledTime: number;
  invalidateCache: boolean;
  cacheValidityDuration: number;
}) => {
  const {
    url,
    onError,
    onStart,
    onSuccess,
    lastCalledTime,
    cacheValidityDuration,
  } = payload;
  console.log(new Date().getMinutes() - lastCalledTime);

  if (new Date().getMinutes() - lastCalledTime < cacheValidityDuration) {
    return;
  }

  // store.dispatch({type: actions.apiCallBegan.type, payload: []});
  store.dispatch({type: onStart, payload: []});
  axios
    .get(url + 'LOL')
    .then(function (response) {
      store.dispatch({
        type: actions.apiCallSuccess.type,
        payload: response.data,
      });
      store.dispatch({type: onSuccess, payload: response.data});
      return response;
    })
    .catch(function (error) {
      store.dispatch({
        type: actions.apiCallFailed.type,
        payload: JSON.stringify(error),
      });
      console.log(error);

      apiQueue.enqueue({url: url, method: 'get'});
      store.dispatch({
        type: onError,
        payload: JSON.stringify(error),
      });
      return error;
    });
};

const apiMiddleware =
  (
    {}, //dispatch, getState
  ) =>
  (next: any) =>
  async (action: any) => {
    console.log(action.type);
    if (action?.type === actions.apiRetry.type) {
      console.log(apiQueue.size());

      for (let index = 0; index < apiQueue.size(); index++) {
        const item = apiQueue.dequeue();
        console.log(item);
      }
      return;
    }
    if (action?.type !== actions.apiCallBegan.type) {
      return next(action);
    }
    makeRequest(action.payload);
  };
export default apiMiddleware;
