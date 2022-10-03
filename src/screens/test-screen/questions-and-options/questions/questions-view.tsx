import React from 'react';
import {View} from 'react-native';

import useHtmlRenderer from '@services/html-renderer/html-renderer';
import {questionViewStyle} from './questions-view-style';

interface IQuestionsViewProps {
  question: string;
}

/**
 * View for Questions
 * @param {string} params.question html format question
 * @returns
 */
const QuestionsView: React.FunctionComponent<IQuestionsViewProps> = ({
  question,
}: IQuestionsViewProps) => {
  return (
    <View style={questionViewStyle?.component}>
      {useHtmlRenderer({htmlContent: question, hasLatex: true})}
    </View>
  );
};

export default QuestionsView;
