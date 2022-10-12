import {useSelector} from 'react-redux';
import {
  getCurrentQuestionIdData,
  getTestLanguage,
} from '@store/entities/test-experience';

interface IQuestionsViewControllerProps {
  questionData: string;
}

type IQuestionsViewControllerType = () => IQuestionsViewControllerProps;

/**
 * @returns this controller the question data according to the language selected by the user
 */
const useQuestionsViewController: IQuestionsViewControllerType = () => {
  const questionSelectorData = useSelector(getCurrentQuestionIdData);
  const selectedLanguage = useSelector(getTestLanguage);

  let questionData = '';

  if (questionSelectorData?.text) {
    questionData = questionSelectorData?.text[selectedLanguage];
  }
  return {questionData};
};

export default useQuestionsViewController;
