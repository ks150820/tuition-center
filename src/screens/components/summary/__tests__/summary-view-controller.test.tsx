import {renderHook} from '@store/util/test.util';

import useSummaryStatusController from '../summary-view-controller';
import TestContext from '@component/contexts/test-context';
import {waitFor} from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('summary-view-controller', () => {
  test('test on click submit method of summary bottom sheet', () => {
    jest.useFakeTimers();
    const contextObject = {
      ibutton: true,
      isVisible: true,
      questionIndex: 0,
      pauseTimer: true,
      sectionQuestions: [],
      timeUp: true,
      handleIButton: () => {},
      flatListRef: jest.fn(),
      flatListRefSec: jest.fn(),
      setQuestionNo: jest.fn(),
      saveNext: jest.fn(),
      handleBottomSheet: jest.fn(),
      openBottomSheet: jest.fn(),
      setQuestionIndex: jest.fn(),
      scrollToIndex: jest.fn(),
      getStatusClass: jest.fn(),
      handleMarkAndReview: jest.fn(),
      clearCurrentAnswer: jest.fn(),
      setTimeUp: jest.fn(),
    };
    const {result} = renderHook(
      useSummaryStatusController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                logs: [
                  {status: 0},
                  {status: 1},
                  {status: 2},
                  {status: 3},
                  {status: 4},
                  {status: 5},
                ],
              },
            },
          },
        },
      },
      TestContext.Provider,
      {value: contextObject},
    );
    jest.advanceTimersByTime(1000);

    waitFor(() => {
      result.current.handleSubmitButton();
    });
  });
});
