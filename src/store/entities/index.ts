import {combineReducers} from '@reduxjs/toolkit';
import userPreferences from './user-preferences';
import downloadManager from './downloadManager';
import testExperience from './test-experience';

export default combineReducers({
  userPreferences,
  downloadManager,
  testExperience,
});
