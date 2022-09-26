import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import asyncStorage from '../../../services/async-storage-service';
import {apiRetry} from '../../actions/actions';
// import {apiCallBegan} from '../actions/actions';
import {AppDispatch, RootState} from '../../configureStore';
import {CACHING_TIME, httpMethods} from '../../enum';
import storeDispatch from '../../util/dispatch';
//Slice => reducer and actions

const slice = createSlice({
  name: 'authentication',
  initialState: <Authentication>{
    authDetails: {name: '', authToken: '', phoneNumber: '', refreshToken: ''},
    isLoggedIn: false,
  },
  reducers: {
    authDetailsUpdated: (
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
      asyncStorage.storeData(authentication.authDetails);
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
} = slice.actions;
export default slice.reducer;

export const callAuthenticationApi = () => () => {
  return storeDispatch({
    url: `v1/user/oauth/token`,
    method: httpMethods.POST,
    data: {mobile_number: '8848195439', otp: '2068', grant_type: 'otp'},
    onStart: authenticationApiCalledStart.type,
    onSuccess: authenticationApiCalledSuccess.type,
    onError: authenticationApiCalledFailed.type,
    auth: false,
    cacheValidityDuration: CACHING_TIME.INVALIDATE,
  });
};
export const callGetOtpApi = () => () => {
  return storeDispatch({
    url: `v1/user/oauth/otp?isLogin=true&v=2`,
    method: httpMethods.POST,
    data: {mobile_number: '8848195439'},
    onStart: getOtpApiCalledStart.type,
    onSuccess: getOtpApiCalledSuccess.type,
    onError: getOtpApiCalledFailed.type,
    auth: false,
    cacheValidityDuration: CACHING_TIME.INVALIDATE,
  });
};
export const callRetry = () => (dispatch: AppDispatch) => {
  return dispatch({
    type: apiRetry.type,
    payload: {},
  });
};
export const updateUserDetails =
  (authData: Authentication) => (dispatch: AppDispatch) => {
    return dispatch({
      type: authDetailsUpdated.type,
      payload: authData,
    });
  };

export const getUserLoggedInData = createSelector(
  (state: RootState) => state.auth.isLoggedIn,
  isLoggedIn => isLoggedIn,
);

export const getAuthDetails = createSelector(
  (state: RootState) => state.auth.authDetails,
  authDetails => authDetails,
);
