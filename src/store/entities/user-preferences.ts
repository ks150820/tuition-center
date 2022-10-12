import {createSelector, createSlice} from '@reduxjs/toolkit';

// Initial state will be used while creating slice
const INITIAL_STATE: UserPreferences = {
  appLanguage: 'en',
  videoLanguage: 'en',
  quality: 360,
  playbackSpeed: 1,
};

/**
 * Create slice for userPreferences store
 */
const slice = createSlice({
  name: 'userPreferences',
  initialState: INITIAL_STATE,
  reducers: {
    storePreferences: (preferences, action) => {
      const payload = action.payload;
      preferences.appLanguage = payload.appLanguage;
      preferences.videoLanguage = payload.videoLanguage;
      preferences.quality = payload.quality;
      preferences.playbackSpeed = payload.playbackSpeed;
    },
  },
});

export const {storePreferences} = slice.actions;

export default slice.reducer;

/**
 * Action Creators
 */

// Will store user preferences to redux
export const setUserPreferences =
  (preferences: UserPreferences) => (dispatch: Dispatch) => {
    return dispatch({type: storePreferences.type, payload: preferences});
  };

/**
 * Selectors
 */

// Selector to get currently active app language
export const getAppLanguage = createSelector(
  (state: StateInstance) => state.entities.userPreferences,
  userPreferences => userPreferences.appLanguage,
);
// Selector to get all user preferences
export const getUserPreferences = createSelector(
  (state: StateInstance) => state.entities.userPreferences,
  userPreferences => userPreferences,
);
