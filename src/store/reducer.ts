import {combineReducers} from '@reduxjs/toolkit';
import authentication from './entities/auth';
import httpManager from './ui/http-manager';

/**
 * Combine all reducers and return a ReducersMapObject
 * @return { ReducersMapObject }
 */
export default combineReducers({
  auth: authentication,
  httpManager: httpManager,
});
