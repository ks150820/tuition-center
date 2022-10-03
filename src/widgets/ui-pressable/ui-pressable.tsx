import React, {ReactNode} from 'react';
import {Pressable, ViewStyle} from 'react-native';
import COLORS from 'themes/colors';

interface IUIPressableProps {
  children: ReactNode;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
  testID?: string;
  rippleColor?: string;
}

/**
 * Widget for press element
 * @param {IUIPressableProps} props
 * @returns
 */
const UIPressable: React.FunctionComponent<IUIPressableProps> = ({
  children,
  onPress,
  rippleColor = COLORS.white,
  style,
  testID,
}) => {
  return (
    <Pressable
      onPress={onPress}
      children={children}
      style={style}
      testID={testID}
      android_ripple={{color: rippleColor}}
    />
  );
};

export default UIPressable;
