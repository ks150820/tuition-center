import React from 'react';

import UIRadioButtonView from './ui-radio-button-view';

/**
 *
 * @param {boolean, } params.isChecked this argument is used to set the state of radio button either radio will true or false
 * @param {OnPressType} params.onPress this argument to manage the state of radio button, to set the state in true or false. End returns nothing
 * @returns return the radio button view ui
 */
const UIRadioButton: React.FC<IUIButton> = ({isChecked = false, onPress}) => {
  return <UIRadioButtonView isChecked={isChecked} onPress={onPress} />;
};

export default UIRadioButton;
