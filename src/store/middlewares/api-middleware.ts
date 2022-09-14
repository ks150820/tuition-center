import {AppDispatch, RootState, store} from '../configureStore';
import * as actions from '../actions/actions';
import apiQueue from '../config/apiQueue';
import {createRequestObject} from '../../util/request';
import {CACHING_TIME, httpMethods} from '../enum';
import {httpInterceptor} from '../../services/http-interceptor-service';
import {handleError} from '../ui/http-manager';

export interface thunkType {
  dispatch: AppDispatch;
  getState: RootState;
}
interface IDataType {
  type: string;
  payload: unknown;
}

const makeRequest = (payload: {
  url: string;
  onError: string;
  onStart: string;
  onSuccess: string;
  lastCalledTime: number;
  cacheValidityDuration: CACHING_TIME;
}) => {
  const {
    url,
    onError,
    onStart,
    onSuccess,
    lastCalledTime,
    cacheValidityDuration,
  } = payload;
  const dispatch = (data: IDataType) => {
    store.dispatch({
      type: data.type,
      payload: data.payload,
    });
    data.type === actions.apiCallSuccess.type
      ? store.dispatch({type: onSuccess, payload: data.payload})
      : data.type === actions.apiCallFailed.type
      ? store.dispatch({
          type: onError,
          payload: data.payload,
        })
      : store.dispatch({type: onStart, payload: []});
  };
  if (new Date().getMinutes() - lastCalledTime < cacheValidityDuration) {
    return;
  }

  httpInterceptor
    .request(createRequestObject(url, httpMethods.GET))
    .then(response => {
      console.log(response.data);
      dispatch({type: actions.apiCallSuccess.type, payload: response.data});
      return response;
    })
    .catch(error => {
      console.log(error);
      if (error.response) {
        store.dispatch(
          handleError({
            errorCode: error.code || 'NaN',
            errorMessage: error.message || 'something went wrong',
          }),
        );
      }
      dispatch({
        type: actions.apiCallFailed.type,
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
