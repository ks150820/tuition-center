/* eslint-disable @typescript-eslint/no-shadow */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {httpManager} from '@store/@types/ui/http-manager';
import {AppDispatch, RootState} from '@store/configureStore';
import {CACHING_TIME, httpMethods} from '@store/enum';
import apiDispatch from '@store/util/dispatch';
import {createSelector} from 'reselect';

// type action = {
//   config: {url: string; method: httpMethods; data: any};
// };
const slice = createSlice({
  name: 'httpManager',
  initialState: <httpManager>{
    error: {errorCode: '', errorMessage: 'Something went wrong'},
    haltedAPiCalls: [],
    authToken: {
      token: '',
      isUpdated: false,
      lastUpdated: 0,
    },
  },
  reducers: {
    updateErrorMessage: (
      httpManager: httpManager,
      action: PayloadAction<{errorCode: string; errorMessage: string}>,
    ) => {
      const {errorCode, errorMessage} = action.payload;
      httpManager.error = {errorCode, errorMessage};
    },
    authTokenUpdated: (
      httpManager: httpManager,
      action: PayloadAction<{isUpdated: boolean; token: string}>,
    ) => {
      httpManager.authToken.isUpdated = action.payload.isUpdated;
      httpManager.authToken.token = action.payload.token;
      httpManager.authToken.lastUpdated = new Date().getTime();
    },
    initHaltedApis: (httpManager: httpManager) => {
      httpManager.haltedAPiCalls = [];
      httpManager.authToken.isUpdated = false;
      httpManager.error = {errorCode: '', errorMessage: ''};
    },
    addToHaltedApis: (
      httpManager: httpManager,
      action: PayloadAction<{url: string; method: httpMethods; data?: any}>,
    ) => {
      httpManager.haltedAPiCalls.push(action?.payload);
    },
    haltedApiCallSuccess: () => {},
    haltedApiCallFailed: () => {},
    haltedApiCallStarted: () => {},
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
  (authToken: {isUpdated: boolean; token: string}) => (dispatch: AppDispatch) =>
    dispatch({
      type: authTokenUpdated.type,
      payload: authToken,
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
    apiDispatch({
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
  (state: RootState) => state.httpManager.authToken.isUpdated,
  isUpdated => isUpdated,
);

export const getHaltedApis = createSelector(
  (state: RootState) => state.httpManager.haltedAPiCalls,
  haltedAPiCalls => haltedAPiCalls,
);
