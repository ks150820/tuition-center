import {useContext} from 'react';
import {useSelector} from 'react-redux';
import {
  getQuestionIndex,
  getTotalSectionLength,
  getTestDuration,
} from '@store/entities/test-experience';
import TestContext from '@component/contexts/test-context';

interface UseBottomHeaderControllerReturn {
  questionIndex: number;
  totalQuestions: number;
  pauseTimer: boolean;
  testDuration: number;
}

type UseBottomHeaderControllerType = () => UseBottomHeaderControllerReturn;

const useBottomHeaderController: UseBottomHeaderControllerType = () => {
  const questionIndex: number = useSelector(getQuestionIndex);
  const totalQuestions: number = useSelector(getTotalSectionLength);
  const testDuration: number = useSelector(getTestDuration);

  /**
   * pauseTimer is the boolean value to pause the timer when user is offline or when internet is not available
   */
  const {pauseTimer} = useContext(TestContext) as contextType;

  return {
    questionIndex,
    totalQuestions,
    pauseTimer,
    testDuration,
  };
};

export default useBottomHeaderController;
