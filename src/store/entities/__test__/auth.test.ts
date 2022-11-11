import {waitFor} from '@testing-library/react-native';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {store} from '../../configureStore';
let mock = new MockAdapter(axios);
import * as auth from '../auth';
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
describe('testing authentication', async () => {
  describe('', async () => {
    test('test for getting the otp', () => {
      mock.onGet('v1/user/oauth/otp?isLogin=true&v=2').reply(200, {});

      waitFor(() => {
        store.dispatch(auth.callGetOtpApi());
      });
    });
    test('test for getting the auth details', () => {
      mock.onGet('v1/user/oauth/token').reply(200, {});
      waitFor(() => {
        store.dispatch(auth.callAuthenticationApi());
      });
    });
  });
  describe('testing retry func', () => {
    test('testing retry', () => {
      store.dispatch(auth.callRetry());
    });
  });
  describe('testing updating auth details', () => {
    test('testing retry', () => {
      store.dispatch(
        auth.updateUserDetails({
          authDetails: {
            name: 'some',
            phoneNumber: 'phone',
            authToken: '',
            refreshToken: '',
            email: '',
          },
          isLoggedIn: true,
        }),
      );
    });
  });
  await new Promise(r => setTimeout(r, 2000));
  test('test get is user logged in or not selector', () => {
    let result = auth.getUserLoggedInData(store.getState());
    expect(result).toEqual(true);
  });
  test('test get is user auth details', () => {
    let result = auth.getAuthDetails(store.getState());

    if (result) {
      expect(result).toEqual({
        name: 'some',
        phoneNumber: 'phone',
        authToken: '',
        refreshToken: '',
        email: '',
      });
    }
  });
});
