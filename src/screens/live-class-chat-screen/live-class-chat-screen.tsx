import React from 'react';

import useLiveClassChatController from './live-class-chat-controller';
import LiveClassChatScreenView from './live-class-chat-screen-view';
import {LiveChatContext} from '@components/contexts/live-chat-context';

/**
 *
 * @returns returns the live chat ui
 */
const LiveClassChatScreen = () => {
  const {
    handleMessage,
    handleSendMessage,
    handlePagination,
    message,
    dbResponse,
    USER_ID,
    isLoading,
  } = useLiveClassChatController();
  return (
    <LiveChatContext.Provider
      value={{
        chatInput: handleMessage,
        sendMessage: handleSendMessage,
        handlePagination: handlePagination,
        message: message,
        messageResponse: dbResponse,
        userId: USER_ID,
        isLoading: isLoading,
      }}>
      <LiveClassChatScreenView />
    </LiveChatContext.Provider>
  );
};

export default LiveClassChatScreen;
