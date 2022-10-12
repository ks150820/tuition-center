import * as actions from '@store/actions/actions';
import {createRequest, HttpClient} from 'axios-secure-access-control';
import {axiosInterceptor} from '@services/http/axios-interceptor-service';
import {store} from 'store/configureStore';
import {BASE_URL, CACHING_TIME} from '@store/enum';
import {handleError} from '@store/ui/http-manager';
interface IDataType {
  type: string;
  payload: unknown;
}

const apiLastCalledTimeMap = new Map<
  string,
  {url: string; method: string; lastCalled: number}
>();
const authToken = store?.getState()?.auth?.authDetails?.authToken;
const makeRequest = (payload: IDispatchType) => {
  const {
    url,
    method,
    data,
    onError,
    onStart,
    onSuccess,
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
  const requestObject = createRequest(
    BASE_URL.PRODUCTION,
    url,
    method,
    HttpClient.MOBILE,
    authToken ? authToken : undefined,
    data,
  );
  let lastCalledTimeApi =
    apiLastCalledTimeMap.get(apiLastCalledApiKey)?.lastCalled;

  if (
    lastCalledTimeApi &&
    cacheValidityDuration > CACHING_TIME.INVALIDATE &&
    new Date().getMinutes() - lastCalledTimeApi < cacheValidityDuration
  ) {
    return;
  }
  axiosInterceptor
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
    if (action?.type !== actions.apiCallBegan.type) {
      return next(action);
    }
    makeRequest(action.payload);
  };

export default apiMiddleware;
