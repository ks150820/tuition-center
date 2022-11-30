import {combineReducers} from '@reduxjs/toolkit';
import userPreferences from './user-preferences';
import downloadManager from './downloadManager';
import testExperience from './test-experience';
import freeVideos from './free-videos';

export default combineReducers({
  userPreferences,
  downloadManager,
  testExperience,
  freeVideos,
});
