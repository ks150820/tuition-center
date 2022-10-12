import React from 'react';
import useMessageComponentController from './message-component-controller';

import MessageComponentView from './message-component-view';

interface IMessageComponent {}

/**
 * returns the ui of message box
 */
const MessageComponent: React.FC<IMessageComponent> = () => {
  const {
    messageResponse,
    flatListRef,
    userId,
    isLoading,
    getTimeFromDate,
    loadMoreMessageEvent,
  } = useMessageComponentController();
  return (
    <MessageComponentView
      userMessage={messageResponse}
      flatListRef={flatListRef}
      getTimeFromDate={getTimeFromDate}
      userId={userId}
      loadMore={loadMoreMessageEvent}
      isLoading={isLoading}
    />
  );
};

export default MessageComponent;
