import React, {useContext} from 'react';

import QuestionPanelView from './question-panel-view';
import TextContext from '@component/contexts/test-context';

interface IQuestionPanel {}

const QuestionPanel: React.FC<IQuestionPanel> = () => {
  const {infoButton} = useContext(TextContext) as contextType;
  return <QuestionPanelView infoButton={infoButton} />;
};

export default QuestionPanel;
