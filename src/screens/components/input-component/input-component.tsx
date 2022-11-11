import React, {useContext} from 'react';

import LiveChatContext from '@components/contexts/live-chat-context';
import InputComponentView from './input-component-view';

interface IInputComponentProps {}

/**
 *
 * @returns the chat input type component
 */
const InputComponent: React.FC<IInputComponentProps> = () => {
  const {message, chatInput, sendMessage} = useContext(
    LiveChatContext,
  ) as liveChatContext;
  return (
    <InputComponentView
      onChangeText={chatInput}
      sendMessage={sendMessage}
      message={message}
    />
  );
};

export default InputComponent;
