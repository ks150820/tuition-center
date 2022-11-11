import React from 'react';
import UIIcon from 'widgets/ui-icon';

/**
 * Widget for pressable icon
 * @param {IUIToggleButtonProps} props
 * @returns
 */
const UIToggleButton: React.FunctionComponent<IUIToggleButtonProps> = ({
  handleOnPress,
  iconName,
  iconType,
  iconSize,
  iconColor,
  containerStyle,
  testID,
}) => {
  return (
    <UIIcon
      testID={testID}
      name={iconName}
      type={iconType}
      color={iconColor}
      size={iconSize}
      onPress={handleOnPress}
      containerStyle={containerStyle}
    />
  );
};

export default UIToggleButton;
