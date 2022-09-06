import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {apiCallBegan, apiRetry} from '../actions/actions';
// import {apiCallBegan} from '../actions/actions';
import {AppDispatch, RootState, store} from '../configureStore';
import storeDispatch from '../util/dispatch';
//Slice => reducer and actions

const slice = createSlice({
  name: 'authentication',
  initialState: <Authentication>{
    user: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
    refresh_token: '',
    userMobileNumber: '',
    isLoggedIn: false,
    lastCalledTime: 0,
  },
  reducers: {
    updateLoggedInStatus: (
      authentication: Authentication,
      action: PayloadAction<{data: boolean}>,
    ) => {
      authentication.isLoggedIn = action.payload?.data || false;
    },
    startApiCall: () => {
      console.log('API CALL START');
    },
    endApiCall: authentication => {
      console.log('API CALL END');
      authentication.lastCalledTime = new Date().getMinutes();
    },
    failedApiCall: () => {
      console.log('API CALL Error');
      // authentication.lastCalledTime = new Date().getMinutes();
    },
  },
});
const {updateLoggedInStatus, startApiCall, endApiCall, failedApiCall} =
  slice.actions;
export default slice.reducer;

export const updateLoginStatus =
  (status: boolean) => (dispatch: AppDispatch) => {
    return dispatch({
      type: updateLoggedInStatus.type,
      payload: {
        data: status,
      },
    });
  };

export const callAPi = () => () => {
  const lastCalled = store.getState().auth.lastCalledTime;
  return storeDispatch({
    url: 'https://mocki.io/v1/7789745b-9e42-4385-9c75-00e1cf1677c3',
    method: 'get',
    onStart: startApiCall.type,
    onSuccess: endApiCall.type,
    onError: failedApiCall.type,
    lastCalledTime: lastCalled || 0,
    cacheValidityDuration: 1,
  });
};
export const callRetry = () => (dispatch: AppDispatch) => {
  return dispatch({
    type: apiRetry.type,
    payload: {},
  });
};
export const updateLogin = createAsyncThunk(
  updateLoggedInStatus.type,
  (data: boolean) => {
    return {data: data};
  },
);

export const getUserLoggedInData = createSelector(
  (state: RootState) => state.auth.isLoggedIn,
  isLoggedIn => isLoggedIn,
);
