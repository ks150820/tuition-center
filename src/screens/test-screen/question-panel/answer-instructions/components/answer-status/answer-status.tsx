import React from 'react';

import AnswerStatusView from './answer-status-view';

/**
 *
 * @param {string} params.text title
 * @param {number} params.number total number of answers, un-answered etc.
 * @param {string} params.bgColor back ground color for numbers
 * @param {string} params.textColor title color
 * @returns
 */
const AnswerStatus: React.FC<IAnswerStatus> = ({
  text,
  number,
  bgColor,
  textColor,
}) => {
  return (
    <AnswerStatusView
      textColor={textColor}
      text={text}
      number={number}
      bgColor={bgColor}
    />
  );
};

export default AnswerStatus;
