import {combineReducers} from '@reduxjs/toolkit';
import authentication from './auth';

/**
 * Combine all reducers and return a ReducersMapObject
 * @return { ReducersMapObject }
 */
export default combineReducers({
  auth: authentication,
});
