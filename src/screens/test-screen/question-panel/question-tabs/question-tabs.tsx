import React from 'react';

import QuestionTabsView from './question-tabs-view';
import useQuestionTabsViewController from './question-tabs-view-controller';

interface IQuestionTabsProps {}
const QuestionTabs: React.FunctionComponent<IQuestionTabsProps> = () => {
  const {
    sectionQuestions,
    flatListRefForSections,
    flatListRefForQuestionTab,
    setQuestionIndex,
    scrollToIndex,
    handleQuestion,
    toggleInfoButton,
    getStatusClass,
    setQuestionNo,
  } = useQuestionTabsViewController();

  //TODO: change the questions types when we got the api detail
  return (
    <QuestionTabsView
      questions={sectionQuestions as questions[]}
      setQuestionIndex={(index: number) => setQuestionIndex(index)}
      flatListRefForQuestionTab={flatListRefForQuestionTab}
      scrollToIndex={scrollToIndex}
      flatListRefForSections={flatListRefForSections}
      toggleInfoButton={toggleInfoButton}
      handleQuestion={(id: string) => handleQuestion(id)}
      getStatusClass={getStatusClass}
      setQuestionNo={setQuestionNo}
    />
  );
};

export default QuestionTabs;
