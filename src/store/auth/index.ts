import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {AppDispatch, RootState} from '../configureStore';
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
  },
  reducers: {
    updateLoggedInStatus: (
      authentication: Authentication,
      action: PayloadAction<boolean>,
    ) => {
      authentication.isLoggedIn = action.payload;
    },
  },
});
const {updateLoggedInStatus} = slice.actions;
export default slice.reducer;

export const updateLoginStatus =
  (status: boolean) => (dispatch: AppDispatch) => {
    return dispatch({type: updateLoggedInStatus.type, payload: status});
  };

export const getUserLoggedInData = createSelector(
  (state: RootState) => state.auth.isLoggedIn,
  isLoggedIn => isLoggedIn,
);
