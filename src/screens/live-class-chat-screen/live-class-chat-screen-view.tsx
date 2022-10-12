import React from 'react';
import {KeyboardAvoidingView} from 'react-native';

import MessageComponent from '@screens/components/message-component';
import InputComponent from '@screens/components/input-component';
import {styles} from './live-class-chat-screen-style';

interface ILiveClassChatScreenViewProps {
  containerStyle?: ViewStyle;
}

/**
 *
 * @returns returns the live chat ui
 */
const LiveClassChatScreenView: React.FC<ILiveClassChatScreenViewProps> = ({
  containerStyle,
}) => {
  return (
    <KeyboardAvoidingView style={[styles.component, containerStyle]}>
      <MessageComponent />
      <InputComponent />
    </KeyboardAvoidingView>
  );
};

export default LiveClassChatScreenView;
