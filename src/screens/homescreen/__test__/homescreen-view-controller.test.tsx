import {renderHook} from '@testing-library/react-native';
import useHomeScreenViewController from '../homescreen-view-controller';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});
describe('testing home screen view', () => {
  test('test component', () => {
    const {result} = renderHook(useHomeScreenViewController);
    result.current.onPress();
  });
});
