import React from 'react';

import QuestionsView from './questions-view';
import useQuestionsViewController from './questions-view-controller';

interface IQuestionsProps {}

/**
 *
 * @returns this component use to return the questions component ui
 */
const Questions: React.FunctionComponent<IQuestionsProps> = () => {
  const {questionData} = useQuestionsViewController();

  return <QuestionsView question={questionData} />;
};

export default Questions;
