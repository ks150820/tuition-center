import {useState, useEffect, useCallback, useContext} from 'react';

import {useLogStatus} from '@screens/components/hooks/log-status-hook/log-status';
// import useNavigator from '@navigate/common/navigation';
import TestContext from '@component/contexts/test-context';
import {CONSTANTS} from '@screens/test-screen/question-panel/answer-instructions/constants/answer-instruction-constants';

interface IUseSummaryStatusControllerProps {
  status_array: statusTitleNumber[];
  seconds: number;
  isVisible: boolean;
  timeUp: boolean;
  handleSubmitButton: () => void;
  toggleBottomSheet: () => void;
}

interface IUseSummaryStatusControllerPropsType {
  navigation: any;
}
// type IUseSummaryStatusControllerProps;

const useSummaryStatusController = ({
  navigation,
}: IUseSummaryStatusControllerPropsType): IUseSummaryStatusControllerProps => {
  const [seconds, setSeconds] = useState<number>(5);

  const {
    answered,
    unanswered,
    notVisited,
    markedAndAnswered,
    markedForReview,
    totalLogs,
  } = useLogStatus();

  /**
   * callback is their because this method used in useEffect, so to prevent the rerendering we used callback here
   */
  const handleSubmitButton = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const {isVisible, toggleBottomSheet, timeUp} = useContext(
    TestContext,
  ) as contextType;

  useEffect(() => {
    if (timeUp) {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          handleSubmitButton();
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeUp, seconds, handleSubmitButton]);

  const status_array: statusTitleNumber[] = [
    {
      text: CONSTANTS.TXT_TOTAL_QUESTIONS,
      number: totalLogs,
    },
    {
      text: CONSTANTS.TXT_ANSWERED,
      number: answered,
    },
    {
      text: CONSTANTS.TXT_NOT_ANSWERED,
      number: unanswered,
    },
    {
      text: CONSTANTS.TXT_NOT_VISITED,
      number: notVisited,
    },
    {
      text: CONSTANTS.TXT_MARKED_FOR_REVIEW,
      number: markedForReview,
    },
    {
      text: CONSTANTS.TXT_ANSWERED_MARKED,
      number: markedAndAnswered,
    },
  ];

  return {
    status_array,
    seconds,
    isVisible,
    timeUp,
    handleSubmitButton,
    toggleBottomSheet,
  };
};

export default useSummaryStatusController;
