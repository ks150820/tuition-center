import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import asyncStorage from '../../services/async-storage-service';
import {apiRetry} from '../actions/actions';
// import {apiCallBegan} from '../actions/actions';
import {AppDispatch, RootState} from '../configureStore';
import {CACHING_TIME, httpMethods} from '../enum';
import apiDispatch from '../util/dispatch';
//Slice => reducer and actions
const slice = createSlice({
  name: 'authentication',
  initialState: <Authentication>{
    authDetails: {
      name: '',
      authToken: '',
      phoneNumber: '',
      refreshToken: '',
    },
    isLoggedIn: false,
  },
  reducers: {
    authDetailsUpdated: (
      authentication: Authentication,
      action: PayloadAction<{
        name: string;
        refreshToken: string;
        authToken: string;
        phoneNumber: string;
      }>,
    ) => {
      const {name, refreshToken, authToken, phoneNumber} = action?.payload;

      authentication.authDetails = {
        name,
        phoneNumber,
        authToken,
        refreshToken,
      };
      authentication.isLoggedIn = true;
    },
    authenticationApiCalledSuccess: (
      authentication: Authentication,
      action: PayloadAction<{
        first_name: string;
        refresh_token: string;
        token: string;
        mobile_number: string;
      }>,
    ) => {
      const {first_name, refresh_token, token, mobile_number} = action?.payload;
      authentication.authDetails = {
        name: first_name,
        phoneNumber: mobile_number,
        authToken: token,
        refreshToken: refresh_token,
      };

      authentication.isLoggedIn = true;
      asyncStorage.storeData('@keyAuthData', authentication.authDetails);
    },
    authTokenUpdated: (
      authentication: Authentication,
      action: PayloadAction<{
        token: string;
      }>,
    ) => {
      authentication.authDetails = {
        ...authentication.authDetails,
        authToken: action.payload.token,
      };
      asyncStorage.storeData('@keyAuthData', authentication.authDetails);
    },
    authenticationApiCalledStart: () => {},
    authenticationApiCalledFailed: () => {},
    getOtpApiCalledSuccess: () => {},
    getOtpApiCalledStart: () => {},
    getOtpApiCalledFailed: () => {},
  },
});
const {
  authDetailsUpdated,
  authenticationApiCalledSuccess,
  authenticationApiCalledStart,
  authenticationApiCalledFailed,
  getOtpApiCalledSuccess,
  getOtpApiCalledStart,
  getOtpApiCalledFailed,
  authTokenUpdated,
} = slice.actions;
export default slice.reducer;

export const callAuthenticationApi = () => () => {
  return apiDispatch({
    url: `v1/user/oauth/token`,
    method: httpMethods.POST,
    data: {mobile_number: '7356704543', otp: '3008', grant_type: 'otp'},
    onStart: authenticationApiCalledStart.type,
    onSuccess: authenticationApiCalledSuccess.type,
    onError: authenticationApiCalledFailed.type,
    auth: false,
    cacheValidityDuration: CACHING_TIME.INVALIDATE,
  });
};
export const callGetOtpApi = () => () => {
  return apiDispatch({
    url: `v1/user/oauth/otp?isLogin=true&v=2`,
    method: httpMethods.POST,
    data: {mobile_number: '7356704543'},
    onStart: getOtpApiCalledStart.type,
    onSuccess: getOtpApiCalledSuccess.type,
    onError: getOtpApiCalledFailed.type,
    auth: false,
    cacheValidityDuration: CACHING_TIME.INVALIDATE,
  });
};
export const callRetry = () => (dispatch: Dispatch) => {
  return dispatch({
    type: apiRetry.type,
    payload: {},
  });
};
export const updateUserDetails =
  (authData: Authentication) => (dispatch: Dispatch) => {
    return dispatch({
      type: authDetailsUpdated.type,
      payload: authData,
    });
  };
export const updateAuthToken = (token: string) => (dispatch: Dispatch) =>
  dispatch({
    type: authTokenUpdated.type,
    payload: token,
  });
export const getUserLoggedInData = createSelector(
  (state: RootState) => state.auth.isLoggedIn,
  isLoggedIn => isLoggedIn,
);

export const getAuthDetails = createSelector(
  (state: RootState) => state.auth.authDetails,
  authDetails => authDetails,
);
