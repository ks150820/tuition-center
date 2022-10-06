import React from 'react';
import {View, Text} from 'react-native';

import UIButton from '@widgets/ui-btn';
import UIIcon from '@widgets/ui-icon';
import {COLORS} from '@resources/colors';
import {answerStyle} from './answer-status-style';
import {CONSTANTS} from '../../constants/answer-instruction-constants';

/**
 * containing the view for right hand side bar for displaying the statuses of all the questions answered or unanswered
 * @param {string} params.text title
 * @param {number} params.number total number of answers, un-answered etc.
 * @param {string} params.bgColor back ground color for numbers
 * @param {string} params.textColor title color
 */
const AnswerStatusView: React.FC<IAnswerStatus> = ({
  text,
  number,
  bgColor,
  textColor = COLORS.BLACK,
}) => {
  return (
    <View style={answerStyle?.component}>
      <UIButton
        style={{
          buttonStyle: {backgroundColor: bgColor, ...answerStyle?.buttonstyle},
          textStyle: {color: textColor},
        }}
        buttonTitle={number}
      />
      {text === CONSTANTS.TXT_ANSWERED_MARKED && (
        <UIIcon iconName="reader-outline" style={answerStyle?.icon} />
      )}
      <Text style={answerStyle?.textStyle}>{text}</Text>
    </View>
  );
};

export default AnswerStatusView;
