import {AppDispatch, RootState} from '../configureStore';
import * as actions from '../actions/actions';

export interface thunkType {
  dispatch: AppDispatch;
  getState: RootState;
}

const thunkMiddleware =
  ({dispatch, getState}: any) =>
  (next: any) =>
  (action: any) => {
    const {data, onStart, onSuccess, onError} = action.payload;
    console.log(JSON.stringify(action));

    // If the "action" is actually a function instead...
    if (typeof action === 'function') {
      // then call the function and pass `dispatch` and `getState` as arguments
      if (onSuccess) {
        dispatch({type: actions.apiCallSuccess.type, payload: data});
      }
      if (onStart) {
        dispatch({type: actions.apiCallBegan.type, payload: data});
      }
      if (onError) {
        dispatch({type: actions.apiCallFailed.type, payload: data});
      }
      return action(dispatch, getState);
    }

    // Otherwise, it's a normal action - send it onwards
    return next(action);
  };
export default thunkMiddleware;
