import {store} from '../configureStore';
import * as actions from '../actions/actions';
import apiQueue from '../config/apiQueue';
import {createRequestObject} from '../../util/request';
import {httpInterceptor} from '../../services/http/http-interceptor-service';
import {handleError} from '../ui/http-manager';
import {IDispatchType} from '../../@types';
interface IDataType {
  type: string;
  payload: unknown;
}

const apiLastCalledTimeMap = new Map<
  string,
  {url: string; method: string; lastCalled: number}
>();

const makeRequest = (payload: IDispatchType) => {
  const {
    url,
    method,
    data,
    onError,
    onStart,
    onSuccess,
    auth,
    cacheValidityDuration,
  } = payload;
  const dispatch = (oData: IDataType) => {
    store.dispatch({
      type: oData.type,
      payload: oData.payload,
    });
    oData.type === actions.apiCallSuccess.type
      ? store.dispatch({type: onSuccess, payload: oData.payload})
      : oData.type === actions.apiCallFailed.type
      ? store.dispatch({
          type: onError,
          payload: oData.payload,
        })
      : store.dispatch({type: onStart, payload: []});
  };

  let apiLastCalledApiKey = url + method;
  const requestObject = createRequestObject(url, method, auth, data);
  let lastCalledTimeApi =
    apiLastCalledTimeMap.get(apiLastCalledApiKey)?.lastCalled;

  if (
    lastCalledTimeApi &&
    new Date().getMinutes() - lastCalledTimeApi < cacheValidityDuration
  ) {
    return;
  }
  httpInterceptor
    .request(requestObject)
    .then(response => {
      dispatch({type: actions.apiCallSuccess.type, payload: response.data});

      apiLastCalledTimeMap.set(apiLastCalledApiKey, {
        url: url,
        method: method,
        lastCalled: new Date().getMinutes(),
      });
      return response;
    })
    .catch(error => {
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
