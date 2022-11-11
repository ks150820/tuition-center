import React from 'react';
import {View, Pressable} from 'react-native';

import {styles} from './input-component-style';
import UIInput from '@widgets/ui-input';
import UIIcon from '@widgets/ui-icon';
import {COLORS} from '@resources/colors';

interface IInputComponentViewProps {
  onChangeText: (textEvent: string) => void;
  sendMessage: () => void;
  message: string;
}

/**
 *
 * @param {string} params.message user message
 * @param {} params.onChangeText callback method to set the user message
 * @param {} params.sendMessage callback method to submit the message
 * @returns returns the ui of the text and send button component ui
 */
const InputComponentView: React.FC<IInputComponentViewProps> = ({
  message,
  onChangeText,
  sendMessage,
}) => {
  return (
    <View style={styles.component}>
      <View style={styles.uiInputComponent}>
        <UIInput
          placeholder="Type a message"
          keyboardType="default"
          onChangeText={text => onChangeText(text)}
          inputValue={message}
          multiline={true}
          // style={styles.uiInputStyle}
          placeholderTextColor={COLORS.GREY.davys_grey}
          style={styles.textInputStyle}
        />
      </View>
      <Pressable
        style={styles.iconComponent}
        onPress={sendMessage}
        testID="send-message">
        <View>
          <UIIcon
            name="send"
            type="ionicon"
            containerStyle={styles.icon}
            size={22}
            color={COLORS.WHITE.white}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default InputComponentView;
