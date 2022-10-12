import React from 'react';
import UIIcon from 'widgets/ui-icon';
import UIPressable from 'widgets/ui-pressable';
import UIRow from 'widgets/ui-row';
import UIText from 'widgets/ui-text';
import {styles} from './resources/styles';

/**
 * View for SettingItem
 * @param {ISettingItemViewProps} props
 * @returns
 */
const ICON_SIZE = 20;

const SettingItemView: React.FunctionComponent<ISettingItemViewProps> = ({
  iconName,
  iconType,
  label,
  value,
  onPress,
}) => {
  return (
    <UIPressable testID="pressable" onPress={onPress}>
      <UIRow style={styles.container}>
        <UIRow>
          <UIIcon name={iconName} type={iconType} size={ICON_SIZE} />
          <UIText containerStyle={styles.label}>{label}</UIText>
        </UIRow>
        <UIText>{value}</UIText>
      </UIRow>
    </UIPressable>
  );
};

export default SettingItemView;
