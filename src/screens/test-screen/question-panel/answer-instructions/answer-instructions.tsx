import React from 'react';

import AnswerInstructionsView from './answer-instructions-view';
import useAnswerInstructionsViewController from './answer-instructions-view-controller';

interface IAnswerInstructionsProps {}

const AnswerInstructions: React.FC<IAnswerInstructionsProps> = () => {
  const {
    questionType,
    languages,
    optionsValue,
    showOptions,
    test_status,
    toggleOptions,
    handleOptionValue,
  } = useAnswerInstructionsViewController();

  return (
    <AnswerInstructionsView
      questionType={questionType}
      languages={languages}
      toggleOptions={toggleOptions}
      handleOptionsValue={handleOptionValue}
      optionsValue={optionsValue}
      showOption={showOptions}
      test_status={test_status}
    />
  );
};

export default AnswerInstructions;
