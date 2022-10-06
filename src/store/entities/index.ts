import {combineReducers} from '@reduxjs/toolkit';
import userPreferences from './user-preferences';
import downloadManager from './downloadManager';

export default combineReducers({
  userPreferences,
  downloadManager,
});
