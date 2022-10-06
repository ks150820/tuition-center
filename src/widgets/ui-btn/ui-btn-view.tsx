import React from 'react';
import {View, Text} from 'react-native';
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
  textStyle,
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
        <Text>
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
              textStyle={textStyle}
              textAlign={restTextProps?.textAlign}
              containerStyle={restTextProps?.containerStyle}>
              {btnText}
            </UIText>
          )}
        </Text>
      </UIPressable>
    </View>
  );
};

export default UIBtnView;
