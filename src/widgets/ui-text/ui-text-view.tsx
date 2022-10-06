import React from 'react';
import styled from 'styled-components/native';
import COLORS from '../../theme/colors';
import {FONT_SIZE, FONT_TYPE} from '../../theme/font';

const FontLight = styled.Text`
  font-family: OpenSans-Light;
`;
const FontRegular = styled.Text`
  font-family: OpenSans-Regular;
`;
const FontMedium = styled.Text`
  font-family: OpenSans-SemiBold;
`;
const FontBold = styled.Text`
  font-family: OpenSans-Bold;
`;

const TextContainer = styled.View``;

/**
 * View for UIText
 * @param {IUITextViewProps} props
 * @returns
 */

const TEST_DECORATION_LINE = 'line-through';
const TEST_DECORATION_STYLE = 'solid';

const UITextView: React.FunctionComponent<IUITextViewProps> = ({
  type = FONT_TYPE.regular,
  size = FONT_SIZE.regular,
  color = COLORS.black,
  containerStyle,
  numberOfLines,
  textAlign,
  textStyle,
  strikeText,
  children,
}) => {
  // function to render different type of text
  const renderText = () => {
    let textStyleArray = [
      {fontSize: size, color: color, textAlign: textAlign},
      textStyle,
      strikeText && {
        textDecorationLine: TEST_DECORATION_LINE,
        textDecorationStyle: TEST_DECORATION_STYLE,
      },
    ];
    switch (type) {
      case FONT_TYPE.bold:
        return (
          <FontBold numberOfLines={numberOfLines} style={textStyleArray}>
            {children}
          </FontBold>
        );
      case FONT_TYPE.semiBold:
        return (
          <FontMedium numberOfLines={numberOfLines} style={textStyleArray}>
            {children}
          </FontMedium>
        );
      case FONT_TYPE.regular:
        return (
          <FontRegular numberOfLines={numberOfLines} style={textStyleArray}>
            {children}
          </FontRegular>
        );
      case FONT_TYPE.regular:
        return (
          <FontRegular numberOfLines={numberOfLines} style={textStyleArray}>
            {children}
          </FontRegular>
        );
      case FONT_TYPE.light:
        return (
          <FontLight numberOfLines={numberOfLines} style={textStyleArray}>
            {children}
          </FontLight>
        );
      default:
        return (
          <FontRegular numberOfLines={numberOfLines} style={textStyleArray}>
            {children}
          </FontRegular>
        );
    }
  };

  return (
    <TextContainer numberOfLines={numberOfLines} style={containerStyle}>
      {renderText()}
    </TextContainer>
  );
};

export default UITextView;
