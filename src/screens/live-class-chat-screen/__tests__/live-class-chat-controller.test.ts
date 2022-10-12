import {renderHook} from '@store/util/test.util';
import {waitFor} from '@testing-library/react-native';
import {DeviceEventEmitter, NativeModules} from 'react-native';

import useLiveClassChatController from '../live-class-chat-controller';

describe('live-class-chat-controller', () => {
  const devicMockListener = jest.spyOn(DeviceEventEmitter, 'addListener');

  test('test controller for non blocked user', () => {
    devicMockListener.mockImplementation((_event: any, cb: any) => {
      return cb('{"messageId": "1234"}');
    });

    NativeModules.firebase = {
      getAllchatsfromfirebase: jest.fn((_event, callback) => {
        return callback('[{"messageId": "1234"}]');
      }),
      getAllBlockeUserDetails: jest.fn((_event, callback) => {
        return callback('[{"messageId": "1234"}]');
      }),
      startAddChatListener: jest.fn(callback => {
        console.log(callback());
      }),
      removedAddChatListener: jest.fn(),
      addFirebaseData: jest.fn((_options, _videoId, _timeStamp, error) => {
        return error('error');
      }),
    };

    const {result} = renderHook(useLiveClassChatController);

    waitFor(() => {
      result.current.handleSendMessage();
    });
  });

  test('test controller for blocked user', () => {
    devicMockListener.mockImplementation((_event: any, cb: any) => {
      return cb('{"messageId": "1234"}');
    });

    NativeModules.firebase = {
      getAllchatsfromfirebase: jest.fn((_event, callback) => {
        return callback('[{"messageId": "1234"}]');
      }),
      getAllBlockeUserDetails: jest.fn((_event, callback) => {
        return callback('[{"userId": "1234"}]');
      }),
      startAddChatListener: jest.fn(callback => {
        console.log(callback());
      }),
      removedAddChatListener: jest.fn(),
      addFirebaseData: jest.fn((_options, _videoId, _timeStamp, error) => {
        return error('error');
      }),
    };

    const {result} = renderHook(useLiveClassChatController);

    waitFor(() => {
      result.current.handleSendMessage();
    });
  });

  test('test handleMessage method', () => {
    const {result} = renderHook(useLiveClassChatController);

    waitFor(() => {
      result.current.handleMessage('testing');
    });
  });
});
