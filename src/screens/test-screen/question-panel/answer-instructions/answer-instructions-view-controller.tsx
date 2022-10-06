import {useEffect, useState, useContext} from 'react';
import {DeviceEventEmitter} from 'react-native';
import {useDispatch} from 'react-redux';

import {updateTestLanguage} from '@store/entities/test-experience';
import useOptionsController from '@screens/test-screen/questions-and-options/question-options/question-options-controller';
import {useLogStatus} from '@screens/components/hooks/log-status-hook/log-status';
import {
  languages,
  BACKGROUND_TEXT_COLORS,
  CONSTANTS,
} from '@screens/test-screen/question-panel/answer-instructions/constants/answer-instruction-constants';
import {QUESTION_TYPES} from '@screens/components/resources/strings/question-types';
import TestContext from '@component/contexts/test-context';

const useAnswerInstructionsViewController = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [optionsValue, setOptionsValue] = useState<string>('');
  const [questionType, setQuestionType] = useState<string>('');
  const [instructionLanguage, setInstructionLanguage] = useState<string>('en');

  const {toggleInfoButton} = useContext(TestContext) as contextType;

  useEffect(() => {
    const listener = DeviceEventEmitter.addListener('click-outside', () => {
      toggleInfoButton();
    });

    return () => {
      listener.remove();
    };
  }, [toggleInfoButton]);

  // get the questions options type like mcq, msq or numerical, acc. to these type options will show to the user
  const {optionType} = useOptionsController();

  const {answered, unanswered, notVisited, markedAndAnswered, markedForReview} =
    useLogStatus();

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    if (optionType === QUESTION_TYPES.TXT_MCQ) {
      setQuestionType(CONSTANTS.TXT_MULTIPLE_CHOICE);
    } else if (optionType === QUESTION_TYPES.TXT_MSQ) {
      setQuestionType(CONSTANTS.TXT_MULTIPLE_SELECTION);
    } else if (optionType === CONSTANTS.TXT_NUMERICAL) {
      setQuestionType(CONSTANTS.TXT_NUMERICAL);
    }
  }, [optionType]);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  /**
   *
   * @param {optionNames} value dropdown options value
   * this handler to set the state for dropdown selected option, language selected, update the language in store and use to close the dropdown after selecting the option
   */
  const handleOptionValue = (value: optionNames) => {
    setOptionsValue(value?.name);
    setInstructionLanguage(value?.id);
    dispatch(updateTestLanguage(value?.id));
    setShowOptions(false);
  };

  const totalAnswered: number = answered;
  const totalNotAnswered: number = unanswered;
  const totalMarkedForReview: number = markedForReview;
  const totalNotVisited: number = notVisited;
  const totalAnsweredMarkedForReview: number = markedAndAnswered;

  const test_status: IAnswerStatus[] = [
    {
      text: CONSTANTS.TXT_ANSWERED,
      number: totalAnswered,
      bgColor: BACKGROUND_TEXT_COLORS.ANSWERED.bgColor,
      textColor: BACKGROUND_TEXT_COLORS.ANSWERED.textColor,
    },
    {
      text: CONSTANTS.TXT_NOT_ANSWERED,
      number: totalNotAnswered,
      bgColor: BACKGROUND_TEXT_COLORS.NOT_ANSWERED.bgColor,
      textColor: BACKGROUND_TEXT_COLORS.NOT_ANSWERED.textColor,
    },
    {
      text: CONSTANTS.TXT_NOT_VISITED,
      number: totalNotVisited,
      bgColor: BACKGROUND_TEXT_COLORS.NOT_VISITED.bgColor,
      textColor: BACKGROUND_TEXT_COLORS.NOT_VISITED.textColor,
    },
    {
      text: CONSTANTS.TXT_MARKED_FOR_REVIEW,
      number: totalMarkedForReview,
      bgColor: BACKGROUND_TEXT_COLORS.MARKED_ANSWER_MARKED_FOR_REVIEW.bgColor,
      textColor:
        BACKGROUND_TEXT_COLORS.MARKED_ANSWER_MARKED_FOR_REVIEW.textColor,
    },
    {
      text: CONSTANTS.TXT_ANSWERED_MARKED,
      number: totalAnsweredMarkedForReview,
      bgColor: BACKGROUND_TEXT_COLORS.MARKED_ANSWER_MARKED_FOR_REVIEW.bgColor,
      textColor:
        BACKGROUND_TEXT_COLORS.MARKED_ANSWER_MARKED_FOR_REVIEW.textColor,
    },
  ];
  return {
    questionType,
    languages,
    optionsValue,
    instructionLanguage,
    showOptions,
    test_status,
    toggleOptions,
    handleOptionValue,
  };
};

export default useAnswerInstructionsViewController;
