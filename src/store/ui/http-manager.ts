import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {AppDispatch, RootState} from '../configureStore';
import {httpMethods} from '../enum';

const slice = createSlice({
  name: 'httpManager',
  initialState: <httpManager>{
    error: {errorCode: '', errorMessage: 'Something went wrong'},
    isAuthTokenUpdated: false,
    haltedAPiCalls: [],
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
      action: PayloadAction<boolean>,
    ) => {
      httpManager.isAuthTokenUpdated = action.payload;
    },
    initHaltedApis: (httpManager: httpManager) => {
      httpManager.haltedAPiCalls = [];
      httpManager.isAuthTokenUpdated = false;
      httpManager.error = {errorCode: '', errorMessage: ''};
    },
    addToHaltedApis: (
      httpManager: httpManager,
      action: PayloadAction<{url: string; method: string}>,
    ) => {
      httpManager.haltedAPiCalls.push(JSON.stringify(action?.payload));
    },
  },
});
const {updateErrorMessage, authTokenUpdated, initHaltedApis} = slice.actions;
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
  (isUpdated: boolean) => (dispatch: AppDispatch) =>
    dispatch({
      type: authTokenUpdated.type,
      payload: isUpdated,
    });

export const initHttpManager = () => (dispatch: AppDispatch) =>
  dispatch({
    type: initHaltedApis,
    payload: '',
  });
export const updateHaltedApis =
  (api: {url: string; method: httpMethods}) => (dispatch: AppDispatch) =>
    dispatch({
      type: initHaltedApis,
      payload: api,
    });
export const getApiErrorData = createSelector(
  (state: RootState) => state.httpManager.error,
  error => error,
);
export const getIsAuthTokenUpdated = createSelector(
  (state: RootState) => state.httpManager.isAuthTokenUpdated,
  isAuthTokenUpdated => isAuthTokenUpdated,
);
