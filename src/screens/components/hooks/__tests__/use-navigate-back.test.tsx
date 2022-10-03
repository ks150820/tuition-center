import {BackHandler, Alert} from 'react-native';

import {renderHook} from '@store/util/test.util';
import useNavigationBackHandler from '@screens/components/hooks/use-navigate-back';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('use-navigate-back', () => {
  test('test mobile back button, it will call the Alert pop up', () => {
    BackHandler.addEventListener = jest.fn((value, backAction) => {
      backAction();
      return {remove: jest.fn()};
    });

    Alert.alert = jest.fn((_text_one, _text_two, arr) => {
      if (arr) {
        const [object_first, object_second] = arr;
        if (object_first && object_first.onPress) object_first.onPress();
        if (object_second && object_second.onPress) object_second.onPress();
      }
    });
    const {} = renderHook(useNavigationBackHandler);
  });
});
