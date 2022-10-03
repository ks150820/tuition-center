import React from 'react';
import {View} from 'react-native';

import AnswerInstructions from './answer-instructions';
import QuestionTabs from './question-tabs';

interface IQuestionPanelViewProps {
  infoButton: boolean;
}

const QuestionPanelView: React.FC<IQuestionPanelViewProps> = ({infoButton}) => {
  return (
    <View>
      <QuestionTabs />
      {infoButton && <AnswerInstructions />}
    </View>
  );
};

export default QuestionPanelView;
