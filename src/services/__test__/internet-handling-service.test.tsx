import {renderHook} from '@testing-library/react-native';
import NoInternetConnection from '../../components/no-internet-connection-handle';
import useInterNetHandlingService from '../internet-handling-service';
NoInternetConnection;

describe('Service: Internet Handing', () => {
  test('This test case is used to check internet available', () => {
    const {result} = renderHook(useInterNetHandlingService);
    expect(result.current.isConnected).toEqual(true);
    expect(result.current.NoInterNetConnectionView()).toBeNull();
  });
});
