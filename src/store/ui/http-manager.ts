import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {AppDispatch, RootState} from '../configureStore';

const slice = createSlice({
  name: 'httpManager',
  initialState: <httpManager>{
    error: {errorCode: '', errorMessage: 'Something went wrong'},
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
  },
});
const {updateErrorMessage} = slice.actions;
export default slice.reducer;

export const handleError =
  (error: {errorCode: string; errorMessage: string}) =>
  (dispatch: AppDispatch) => {
    return dispatch({
      type: updateErrorMessage.type,
      payload: error,
    });
  };

export const getApiErrorData = createSelector(
  (state: RootState) => state.httpManager.error,
  error => error,
);
