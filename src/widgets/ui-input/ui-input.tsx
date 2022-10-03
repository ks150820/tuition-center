import React from 'react';

import UIInputView from './ui-input-view';

/**
 *
 * @param {string} params.placeholder to give the placeholder to the input box
 * @param {KeyboardTypes} params.keyboardType to specify the type of keyboard like numeric, number-pad etc.
 * @param {string} params.inputValue to the value to input box
 * @param {NumberPadClick} params.onNumberPadClick this method used to update the text of input text
 * @returns returns the UIInputView component ui
 */
const UIInput = ({
  placeholder = '',
  inputValue,
  keyboardType = 'default',
  onChangeText,
}: IUIInputProps) => {
  return (
    <UIInputView
      keyboardType={keyboardType}
      placeholder={placeholder}
      inputValue={inputValue}
      onChangeText={onChangeText} // TODO: change onNumberPAdClick to onChange method
    />
  );
};

export default UIInput;
