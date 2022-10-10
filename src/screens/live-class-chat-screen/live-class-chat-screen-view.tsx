import React from 'react';
import {KeyboardAvoidingView} from 'react-native';

import MessageComponent from '@screens/components/message-component';
import InputComponent from '@screens/components/input-component';
import {styles} from './live-class-chat-screen-style';

/**
 *
 * @returns returns the live chat ui
 */
const LiveClassChatScreenView = () => {
  return (
    <KeyboardAvoidingView style={styles.component}>
      <MessageComponent />
      <InputComponent />
    </KeyboardAvoidingView>
  );
};

export default LiveClassChatScreenView;
