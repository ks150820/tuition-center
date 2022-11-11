import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, Text} from 'react-native';

import {styles} from './ui-checkbox-view-style';

type handleCheckBoxType = (name: string) => void;
interface IUICheckboxViewProps {
  label?: string;
  name: string;
  isClicked: boolean;
  handleCheckbox: handleCheckBoxType;
}

/**
 *
 * @param {string} params.label it used to give the title to checkbox
 * @param {string} params.name to specify the name of checkbox
 * @param {boolean} params.isClicked it's a boolean value to enabled and disabled the checkbox
 * @param {handleCheckBoxType} params.handleCheckbox it is an callback method used to enable and disable the checkbox according to their checkbox name
 * @returns
 */
const UICheckboxView: React.FC<IUICheckboxViewProps> = ({
  label = '',
  name,
  isClicked,
  handleCheckbox,
}) => {
  return (
    <View style={styles.component}>
      <CheckBox
        disabled={false}
        value={isClicked}
        onValueChange={() => handleCheckbox(name)}
        tintColors={{true: '#1a237e', false: '#5c6bc0'}}
        testID="checkbox"
      />
      <Text style={styles.checkBoxLabelColor}>{label}</Text>
    </View>
  );
};

export default UICheckboxView;
