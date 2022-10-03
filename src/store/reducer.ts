import {combineReducers} from '@reduxjs/toolkit';
import authentication from '@store/entities/auth';
import httpManager from '@store/ui/http-manager';
import testExperience from './entities/test-experience';

/**
 * Combine all reducers and return a ReducersMapObject
 * @return { ReducersMapObject }
 */
export default combineReducers({
  auth: authentication,
  httpManager: httpManager,
  testExperience,
});
