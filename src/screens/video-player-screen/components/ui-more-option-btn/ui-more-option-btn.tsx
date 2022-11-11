import React from 'react';
import {ViewStyle} from 'react-native';
import COLORS from 'theme/colors';
import {ICON_TYPES} from '@theme/icons';
import UIToggleButton from 'widgets/ui-toggle-button';

interface IUiMoreOptionBtnProps {
  onPress: () => void;
  color?: string;
  iconSize?: number;
  containerStyle?: ViewStyle;
  testID?: string;
}

/**
 * More option button widget
 * @param {IUiMoreOptionBtnProps} props
 * @returns
 */

const ICON_SIZE = 22;
const ICON_NAME = 'more-vertical';

const UIMoreOptionBtn: React.FunctionComponent<IUiMoreOptionBtnProps> = ({
  onPress,
  color = COLORS.white,
  iconSize = ICON_SIZE,
  containerStyle,
  testID,
}) => {
  return (
    <UIToggleButton
      iconName={ICON_NAME}
      iconType={ICON_TYPES.feather}
      iconSize={iconSize}
      handleOnPress={onPress}
      iconColor={color}
      containerStyle={containerStyle}
      testID={testID}
    />
  );
};

export default UIMoreOptionBtn;
