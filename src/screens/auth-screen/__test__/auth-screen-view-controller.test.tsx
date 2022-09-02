import {renderHook} from '@testing-library/react-native';
import useAuthScreenViewController from '../auth-screen-view-controller';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
describe('testing home screen view', () => {
  test('test component', () => {
    const {result} = renderHook(useAuthScreenViewController);
    result.current.onPress();
  });
});
