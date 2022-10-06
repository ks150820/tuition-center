import {useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  getSectionDetail,
  updateCurrentQuestionId,
} from '@store/entities/test-experience';
import TestContext from '@component/contexts/test-context';

/**
 * View Controller for QuestionTabs consisting of all the functions required to handle the question tabs on header
 */
const useQuestionTabsViewController: IUseQuestionTabsViewController = () => {
  const {
    questionIndex,
    sectionQuestions,
    toggleInfoButton,
    flatListRefForQuestionTab,
    flatListRefForSections,
    setQuestionIndex,
    setQuestionNo,
    scrollToIndex,
    getStatusClass,
  } = useContext(TestContext) as contextType;

  const sectionDetail = useSelector(getSectionDetail);

  const dispatch = useDispatch<Dispatch>();

  const sectionTabIndex: number = sectionDetail?.index;

  /**
   * update questionId on store on change of question from question panel
   * @param {string} questionId id of question
   */
  const handleQuestion = (questionId: string) => {
    dispatch(updateCurrentQuestionId(questionId));
  };

  return {
    sectionQuestions,
    sectionTabIndex,
    questionIndex,
    flatListRefForQuestionTab,
    flatListRefForSections,
    toggleInfoButton,
    scrollToIndex,
    handleQuestion,
    setQuestionIndex,
    getStatusClass,
    setQuestionNo,
  };
};

export default useQuestionTabsViewController;
