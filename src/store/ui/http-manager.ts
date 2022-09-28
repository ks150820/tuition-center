/* eslint-disable @typescript-eslint/no-shadow */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {httpManager} from '../@types/ui/http-manager';
import {AppDispatch, RootState} from '../configureStore';
import {CACHING_TIME, httpMethods} from '../enum';
import storeDispatch from '../util/dispatch';
// type action = {
//   config: {url: string; method: httpMethods; data: any};
// };
const slice = createSlice({
  name: 'httpManager',
  initialState: <httpManager>{
    error: {errorCode: '', errorMessage: 'Something went wrong'},
    isAuthTokenUpdated: false,
    haltedAPiCalls: [],
    refreshToken: '',
  },
  reducers: {
    updateErrorMessage: (
      httpManager: httpManager,
      action: PayloadAction<{errorCode: string; errorMessage: string}>,
    ) => {
      console.log(JSON.stringify(action));

      const {errorCode, errorMessage} = action.payload;
      httpManager.error = {errorCode, errorMessage};
    },
    authTokenUpdated: (
      httpManager: httpManager,
      action: PayloadAction<{isUpdated: boolean; refreshToken: string}>,
    ) => {
      httpManager.isAuthTokenUpdated = action.payload.isUpdated;
      httpManager.refreshToken = action.payload.refreshToken;
    },
    initHaltedApis: (httpManager: httpManager) => {
      httpManager.haltedAPiCalls = [];
      httpManager.isAuthTokenUpdated = false;
      httpManager.error = {errorCode: '', errorMessage: ''};
    },
    addToHaltedApis: (
      httpManager: httpManager,
      action: PayloadAction<{url: string; method: httpMethods; data?: any}>,
    ) => {
      httpManager.haltedAPiCalls.push(action?.payload);
    },
    haltedApiCallSuccess: () => {},
    haltedApiCallFailed: (httpManager: httpManager, action: any) => {
      console.log(action.payload, 'PAYLOAD >>>>>>>>>>>>>>>>>>>>>');
    },
    haltedApiCallStarted: () => {
      console.log(
        'STARTED>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
      );
    },
  },
});
const {
  updateErrorMessage,
  authTokenUpdated,
  initHaltedApis,
  addToHaltedApis,
  haltedApiCallSuccess,
  haltedApiCallFailed,
  haltedApiCallStarted,
} = slice.actions;
export default slice.reducer;

export const handleError =
  (error: {errorCode: string; errorMessage: string}) =>
  (dispatch: AppDispatch) => {
    return dispatch({
      type: updateErrorMessage.type,
      payload: error,
    });
  };
export const handleAuthTokenUpdate =
  (refreshToken: {isUpdated: boolean; refreshToken: string}) =>
  (dispatch: AppDispatch) =>
    dispatch({
      type: authTokenUpdated.type,
      payload: refreshToken,
    });

export const initHttpManager = () => (dispatch: AppDispatch) =>
  dispatch({
    type: initHaltedApis.type,
    payload: '',
  });
export const updateHaltedApis =
  (api: {url: string; method: httpMethods; data?: any; headers: any}) =>
  (dispatch: AppDispatch) =>
    dispatch({
      type: addToHaltedApis.type,
      payload: api,
    });

export const makeApiCall =
  (url: string, method: httpMethods, data?: any) => () =>
    storeDispatch({
      // url: '7789745b-9e42-4385-9c75-00e1cf1677c3',
      url: url,
      method: method,
      data: data,
      onStart: haltedApiCallStarted.type,
      onSuccess: haltedApiCallSuccess.type,
      onError: haltedApiCallFailed.type,
      auth: false,
      cacheValidityDuration: CACHING_TIME.INVALIDATE,
    });
export const getApiErrorData = createSelector(
  (state: RootState) => state.httpManager.error,
  error => error,
);
export const getIsAuthTokenUpdated = createSelector(
  (state: RootState) => state.httpManager.isAuthTokenUpdated,
  isAuthTokenUpdated => isAuthTokenUpdated,
);

export const getHaltedApis = createSelector(
  (state: RootState) => state.httpManager.haltedAPiCalls,
  haltedAPiCalls => haltedAPiCalls,
);
