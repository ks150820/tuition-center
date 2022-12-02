import {createRequest, HttpClient} from '@secure-access-control/client';
import {axiosInterceptor} from '@services/http/axios-interceptor-service';
import {apiCallBegan} from '@store/actions/actions';
import {BASE_URL, CACHING_TIME} from '@store/enum';
import {AnyAction, Middleware} from 'redux';

// for handling caching , last called time is pushed and compared with current time
const apiLastCalledTimeMap = new Map<
  string,
  {url: string; method: string; lastCalled: number}
>();

/**
 * it will check the time difference between last time when api called and the present time
 * @param key to get the last called time from apiLastCalledTimeMap Map
 * @param timeOut caching time out
 * @returns boolean
 */
const isAPICached = (key: string, timeOut: CACHING_TIME) => {
  let previousTime = apiLastCalledTimeMap.get(key)?.lastCalled;

  //if timer is greater than zero and current time minus previous time is less than  given timeOut
  if (
    previousTime &&
    timeOut > CACHING_TIME.INVALIDATE &&
    new Date().getMinutes() - previousTime < timeOut
  )
    return true;

  return false;
};
/**
 * it will create a request object for axios with header felids
 * @param url url for the api call
 * @param method method for the api call
 * @param authToken auth token
 * @param data data for post request
 */
const createRequestObject = (
  url: string,
  method: HttpMethod,
  authToken: string,
  data?: any,
) =>
  createRequest(
    BASE_URL.PRODUCTION,
    url,
    method,
    HttpClient.MOBILE,
    authToken ? authToken : undefined,
    data,
  );

//  this will make and API request and dispatch different scenarios for api success ,failure and start
/**
 * This will make an api call using axios , 
 *    Before beginning the api call it will dispatch on start action
 *    After a successful api call it will dispatch onSuccess and on error it will dispatch onError action 
 */
const makeApiRequest = async (
  dispatch: AppDispatch,
  getState: RootState,
  payload: IDispatchType,
) => {
  const {
    url,
    method,
    data,
    onError,
    onStart,
    onSuccess,
    cacheValidityDuration,
  } = payload;
  // if api caching timed out , otherwise it wont proceed further 
  if (isAPICached(url + method, cacheValidityDuration)) {
    return;
  }
  const authToken = getState()?.auth?.authDetails?.authToken;
  try {
    dispatch({action: onStart, payload: []});
    let response = await axiosInterceptor.request(
      createRequestObject(url, method, authToken ? authToken : undefined, data),
    );
    if (response?.status === 200) {
      dispatch({action: onSuccess, payload: response.data});
    }
  } catch (error) {
    if (error) dispatch({action: onError, payload: error});
  }
};
const apiMiddleware: Middleware<
  {dispatch: Dispatch; getState: RootState}, // Most middleware do not modify the dispatch return value
  RootState
> =
  ({dispatch, getState}: {dispatch: Dispatch; getState: RootState}) =>
  (next: any) =>
  async (action: AnyAction) => {
    return action?.type === apiCallBegan
      ? makeApiRequest(dispatch, getState, action?.payload)
      : next(action);
  };
export default apiMiddleware;
