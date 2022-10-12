import {useSelector} from 'react-redux';

import {getResData} from '@store/entities/test-experience';

interface UseLogStatusReturnType {
  answered: number;
  unanswered: number;
  notVisited: number;
  markedForReview: number;
  markedAndAnswered: number;
  totalLogs: number;
}
type UseLogStatusType = () => UseLogStatusReturnType;

/**
 * taked the logs from redux and sets the status
 * @returns the status of question if answered or not, or if marked etc.
 */
export const useLogStatus: UseLogStatusType = () => {
  const getTestLogs = useSelector(getResData)?.logs || [];

  let answered: number = 0;
  let unanswered: number = 0;
  let notVisited: number = 0;
  let markedForReview: number = 0;
  let markedAndAnswered: number = 0;
  let totalLogs: number = getTestLogs?.length || 0;

  getTestLogs?.map((each: Log) => {
    switch (each.status) {
      case 0: {
        notVisited = notVisited + 1;
        break;
      }
      case 1: {
        unanswered = unanswered + 1;
        break;
      }
      case 2: {
        answered = answered + 1;
        break;
      }
      case 3: {
        markedForReview = markedForReview + 1;
        break;
      }
      case 4: {
        markedAndAnswered = markedAndAnswered + 1;
        break;
      }
    }
  });

  return {
    answered,
    unanswered,
    notVisited,
    markedForReview,
    markedAndAnswered,
    totalLogs,
  };
};
