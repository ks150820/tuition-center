import React, {ReactNode} from 'react';
import {Pressable, ViewStyle} from 'react-native';
import {COLORS} from 'resources/colors';

interface IUIPressableProps {
  children: ReactNode;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
  testID?: string;
  rippleColor?: string;
  disabled?: boolean;
}

/**
 * Widget for press element
 * @param {IUIPressableProps} props
 * @returns
 */
const UIPressable: React.FunctionComponent<IUIPressableProps> = ({
  children,
  onPress,
  rippleColor = COLORS.WHITE.white,
  style,
  testID,
  disabled,
}) => {
  return (
    <Pressable
      onPress={onPress}
      children={children}
      disabled={disabled}
      style={style}
      testID={testID}
      android_ripple={{color: rippleColor}}
    />
  );
};

export default UIPressable;
