import React from 'react';
import {Text} from 'react-native';
import colors from '../../theme/colors';
import {FONT_TYPE} from '../../theme/font';

/**
 * View for UIText
 * @param {IUITextViewProps} props
 * @returns
 */

interface IUITextViewProps {
  // Font type
  FontType: IFontTypeProp;
  // Font size
  size?: number;
  // Font color
  color?: string;
  // Styling for container
  containerStyle?: ViewStyle;
  // Max number of lines
  numberOfLines?: number;
  // Alignment of text
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  // Styling for text
  style?: object;
  // Children to render
  children?: ReactNode;
}
const UITextView: React.FunctionComponent<IUITextViewProps> = ({
  FontType = FONT_TYPE.PARAGRAPH, // type of font according to design guideline
  color = colors.accent.solid_black,
  numberOfLines,
  textAlign,
  style,
  children,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        style,
        {
          fontFamily: FontType.fontFamily,
          fontSize: FontType.fontSize,
          color: color,
          textAlign: textAlign,
        },
      ]}>
      {children}
    </Text>
  );
};

export default UITextView;
