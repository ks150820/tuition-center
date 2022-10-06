import {renderHook} from '@store/util/test.util';
import TestContext from '@component/contexts/test-context';
import useQuestionTabsViewController from '../question-tabs-view-controller';

describe('question-tabs-view-controller', () => {
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

  test('test question tabs controllers', () => {
    const {result} = renderHook(
      useQuestionTabsViewController,
      {},
      {
        entities: {
          testExperience: {
            sectionInfo: {
              index: 1,
            },
            questions: [
              {
                id: '123',
              },
            ],
          },
        },
      },
      TestContext.Provider,
      {value: contextObject},
    );

    expect(result.current.sectionTabIndex).toEqual(1);
    result.current.handleQuestion('123');
  });
});
