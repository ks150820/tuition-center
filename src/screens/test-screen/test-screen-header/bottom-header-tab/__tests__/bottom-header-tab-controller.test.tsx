import {renderHook} from '@store/util/test.util';
import TestContext from '@component/contexts/test-context';

import useBottomHeaderController from '../bottom-header-tab-controller';

describe('bottom-header-controller', () => {
  const contextObject = {
    infoButton: true,
    isVisible: true,
    questionIndex: 0,
    pauseTimer: true,
    sectionQuestions: [],
    timeUp: true,
    toggleInfoButton: () => {},
    flatListRefForQuestionTab: {current: jest.fn()},
    flatListRefForSections: {current: jest.fn()},
    setQuestionNo: jest.fn(),
    saveNext: jest.fn(),
    handleBottomSheet: jest.fn(),
    toggleBottomSheet: jest.fn(),
    setQuestionIndex: jest.fn(),
    scrollToIndex: jest.fn(),
    getStatusClass: jest.fn(),
    handleMarkAndReview: jest.fn(),
    clearCurrentAnswer: jest.fn(),
    setTimeUp: jest.fn(),
  };

  test('test pauseTimer, when timer will pause the condition for pauseTimer should be true', () => {
    const {result} = renderHook(
      useBottomHeaderController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                test_duration: 60,
              },
            },
            testInfo: {
              questionIndex: 0,
              totalQuestions: 0,
            },
          },
        },
      },
      TestContext.Provider,
      {value: contextObject},
    );

    expect(result.current.pauseTimer).toBe(true);
  });

  test('test question index, the question index should match with question index which is on store', () => {
    const {result} = renderHook(
      useBottomHeaderController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                test_duration: 60,
              },
            },
            testInfo: {
              questionIndex: 1,
              totalQuestions: 0,
            },
          },
        },
      },
      TestContext.Provider,
      {value: contextObject},
    );

    expect(result.current.questionIndex).toBe(1);
  });

  test('check test duration, store test duration timer have to be match', () => {
    const {result} = renderHook(
      useBottomHeaderController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                test_duration: 60,
              },
            },
            testInfo: {
              questionIndex: 1,
              totalQuestions: 0,
            },
          },
        },
      },
      TestContext.Provider,
      {value: contextObject},
    );

    expect(result.current.testDuration).toBe(60);
  });
});
