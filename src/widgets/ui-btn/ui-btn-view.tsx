import React from 'react';
import {View} from 'react-native';
import {COLORS} from 'resources/colors';
import UIIcon from 'widgets/ui-icon';
import UIPressable from 'widgets/ui-pressable';
import UIText from 'widgets/ui-text';
import {styles as btnStyles} from './resources/styles';

/**
 * View for UIBtn
 * @param {IUIBtnViewProps} props
 * @returns
 */

const ICON_SIZE = 22;
const ICON_COLOR = COLORS.BLACK;
const TEST_ID = 'UI-btn';

const UIBtnView: React.FunctionComponent<IUIBtnViewProps> = ({
  btnText = null,
  iconName = '',
  iconType = '',
  iconSize = ICON_SIZE,
  iconColor = ICON_COLOR,
  onPress,
  rippleColor = '',
  styles,
  testID = TEST_ID,
  disabled,
  ...restTextProps
}) => {
  const containerStyle = [
    btnStyles.btnContainer,
    styles?.btnElementWrapper ? styles.btnElementWrapper : {},
  ];

  return (
    <View style={[styles?.outerWrapper]}>
      <UIPressable
        style={containerStyle}
        onPress={onPress}
        disabled={disabled}
        rippleColor={rippleColor}>
        {iconName && (
          <UIIcon
            name={iconName}
            testID={testID}
            type={iconType}
            size={iconSize}
            color={iconColor}
            containerStyle={[
              btnStyles.iconContainer,
              styles?.iconContainerStyle,
            ]}
          />
        )}
        {btnText && (
          <UIText
            type={restTextProps?.type}
            size={restTextProps?.size}
            color={restTextProps?.color}
            containerStyle={restTextProps?.containerStyle}>
            {btnText}
          </UIText>
        )}
      </UIPressable>
    </View>
  );
};

export default UIBtnView;
