import React from 'react';
import {View} from 'react-native';
import {styles} from '../resources/styles/styles';
import {ICON_TYPES} from 'themes/icons';
import COLORS from 'themes/colors';
import UIPressable from 'widgets/ui-pressable';
import UIText from 'widgets/ui-text';
import UIIcon from 'widgets/ui-icon';

/**
 * View for SingleSelectOption
 * @param {ISingleSelectOptionViewProps} props
 * @returns
 */

const ICON_SIZE = 20;
const ICON_NAME = 'checkmark-circle';

const SingleSelectOptionView: React.FunctionComponent<
  ISingleSelectOptionViewProps
> = ({option, isSelected, onSelectOption}) => {
  return (
    <UIPressable
      testID="optionClickHandler"
      onPress={() => onSelectOption(option)}>
      <View style={styles.container}>
        <UIText>{option.label}</UIText>
        {isSelected && (
          <UIIcon
            name={ICON_NAME}
            testID="selectIcon"
            type={ICON_TYPES.ionicon}
            size={ICON_SIZE}
            color={COLORS.primary}
          />
        )}
      </View>
    </UIPressable>
  );
};

export default SingleSelectOptionView;
