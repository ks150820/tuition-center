import React from 'react';
import {View, Pressable} from 'react-native';

import {radioStyle} from './ui-radio-button-view-style';

/**
 *
 * @param {boolean, } params.isChecked this argument is used to set the state of radio button either radio will true or false
 * @param {OnPressType} params.onPress this argument to manage the state of radio button, to set the state in true or false. End returns nothing
 * @returns return the ui of radio button, where we can enable or disable the ui button
 */
const UIRadioButtonView: React.FC<IUIButton> = ({isChecked, onPress}) => {
  return (
    <Pressable onPress={onPress} testID="radioButton">
      <View
        style={[
          radioStyle.radioButton,
          radioStyle.alignCenter,
          radioStyle.justifyCenter,
          isChecked && radioStyle.radioButtonSelected,
        ]}>
        {isChecked && <View style={radioStyle.radioButtonSelectedDot} />}
      </View>
    </Pressable>
  );
};

export default UIRadioButtonView;
