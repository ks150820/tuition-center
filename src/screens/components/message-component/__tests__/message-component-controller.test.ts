import {renderHook} from '@store/util/test.util';

import useMessageComponentController from '../message-component-controller';
import LiveChatContext from '@components/contexts/live-chat-context';
import {Keyboard} from 'react-native';

describe('message-component-controller', () => {
  const mockKeyboardListener = jest.spyOn(Keyboard, 'addListener');
  // const keyboardCallbackMap = {};

  test('test getTimeForDate method', () => {
    mockKeyboardListener.mockImplementation((_event: any, cb: any) => {
      return cb();
    });
    jest.spyOn(Keyboard, 'addListener');
    const contextObject = {
      chatInput: jest.fn(),
      sendMessage: jest.fn(),
      message: 'message',
      messageResponse: [],
      userId: '1234',
    };

    jest.useFakeTimers();
    const {result} = renderHook(
      useMessageComponentController,
      {},
      {},
      LiveChatContext.Provider,
      {value: contextObject},
    );
    jest.advanceTimersByTime(300);
    result.current.getTimeFromDate(new Date().getTime());
  });
});
