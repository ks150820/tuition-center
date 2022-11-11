import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  getCurrentQuestionIdData,
  updateAnsOfCurrentQuestion,
  getTestLanguage,
  getLogs,
} from '@store/entities/test-experience';
import {
  OPTION_INDEX,
  OPTIONS_LABEL,
} from '@screens/test-screen/questions-and-options/constants/options-constants';

type UseOptionsController = () => UseOptionsControllerReturn;

const useOptionsController: UseOptionsController = () => {
  const [isOptions, setOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const getQuestionData = useSelector(getCurrentQuestionIdData);
  const testLogs = useSelector(getLogs);
  const selectedLanguage = useSelector(getTestLanguage);

  const currentQuestionId = getQuestionData?._id;

  const dispatch = useDispatch<Dispatch>();

  let question = testLogs?.filter(
    (each: Log) => each._id === currentQuestionId,
  );
  let selectedOption = question?.[0]?.selected_option || [];
  let questionType = getQuestionData?.question_type;
  let preSelectedMcq = OPTION_INDEX[selectedOption];
  let preSelectedMsq =
    questionType === 'msq'
      ? selectedOption.map((each: string) => OPTION_INDEX[each])
      : [];
  let preSelectedNumeric =
    questionType === 'numeric' ? selectedOption.max : null;

  const options = getQuestionData?.options;
  const optionType = getQuestionData?.question_type;

  /**
   * @param {number} index get the index of selected option from mcq, according to the index we get option value and update the state
   */
  const handleOptions = (index: number) => {
    if (optionType === 'mcq') {
      setOptions([OPTIONS_LABEL[index]]);
    }
  };

  /**
   * @param {string} event used to update numeric answer
   */
  const onChangeText = (event: string) => {
    const number = event?.replace(/[, ]+/g, '').trim();
    setInputValue(number);
    preSelectedNumeric = preSelectedNumeric + number;
    onAnswerUpdate(preSelectedNumeric);
  };

  const onAnswerUpdate = (answer: number) => {
    let answerUpdated = null;
    if (questionType === 'mcq') {
      answerUpdated = [OPTIONS_LABEL[answer]];
    } else if (questionType === 'numeric') {
      answerUpdated = {max: answer};
    } else if (questionType === 'msq') {
      answerUpdated = answer;
    }
    dispatch(
      updateAnsOfCurrentQuestion({
        currentQuestionId: currentQuestionId,
        answer: answerUpdated,
      }),
    );
  };

  /**
   * updating the answer on choosing an option on selection.
   * @param {number} index
   */
  const onOptionSelected = (index: number) => {
    if (questionType === 'mcq') {
      onAnswerUpdate(index);
    } else if (questionType === 'msq') {
      if (preSelectedMsq.includes(index)) {
        preSelectedMsq = preSelectedMsq.filter((ans: number) => ans !== index);
      } else {
        preSelectedMsq.push(index);
      }
      const newMsq = preSelectedMsq.map((each: number) => OPTIONS_LABEL[each]);
      onAnswerUpdate(newMsq);
    }
  };
  return {
    options,
    optionType,
    isOptions,
    preSelectedMcq,
    inputValue,
    selectedLanguage,
    handleOptions,
    onOptionSelected,
    onChangeText,
  };
};

export default useOptionsController;
