import React from 'react';
import {render} from '@store/util/test.util';

import LiveClassChatScreenView from '../live-class-chat-screen-view';
import LiveChatContext from '@components/contexts/live-chat-context';

describe('live-class-chat-screen-view', () => {
  const contextObject = {
    chatInput: jest.fn(),
    sendMessage: jest.fn(),
    message: 'message',
    messageResponse: [],
    userId: '1234',
  };
  test('test the  component', () => {
    const {} = render(
      <LiveChatContext.Provider value={contextObject}>
        <LiveClassChatScreenView />
      </LiveChatContext.Provider>,
    );
  });
});
