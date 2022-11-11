import {act} from '@testing-library/react-native';
import {store} from 'store/configureStore';
import {setUserPreferences} from '../user-preferences';

test('User preferences store test cases', () => {
  // Here we are subscribing to store to listen all further dispatch call
  store.subscribe(() => {
    const userPreferences: UserPreferences =
      store.getState().entities.userPreferences;
    expect(userPreferences.appLanguage).toBe('hi');
  });

  // Dispatch action which sets up HI language
  act(() => {
    store.dispatch(setUserPreferences({appLanguage: 'hi'}));
  });
});
