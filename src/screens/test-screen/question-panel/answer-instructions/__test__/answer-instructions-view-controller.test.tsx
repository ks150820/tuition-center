import {waitFor} from '@testing-library/react-native';
import {renderHook} from '@store/util/test.util';
import useAnswerInstructionsController from '../answer-instructions-view-controller';

describe('answer-instructions-view-controller', () => {
  test('test handleShowOptions and handleOptionValue controller method and when status of a question_type is mcq ', () => {
    const {result} = renderHook(
      useAnswerInstructionsController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                logs: [
                  {
                    status: 0,
                  },
                ],
              },
            },
            currentQuestionIdData: {
              _id: '123',
              question_type: 'mcq',
            },
          },
        },
      },
    );

    waitFor(() => {
      result.current.toggleOptions();
      result.current.handleOptionValue({name: 'English', id: 'en'});
    });
  });

  test('test handleShowOptions and handleOptionValue controller method and when status of a question_type is msq ', () => {
    const {result} = renderHook(
      useAnswerInstructionsController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                logs: [
                  {
                    status: 0,
                    _id: '123',
                    selected_option: ['A'],
                  },
                ],
              },
            },
            currentQuestionIdData: {
              _id: '123',
              question_type: 'msq',
            },
          },
        },
      },
    );

    waitFor(() => {
      result.current.toggleOptions();
      result.current.handleOptionValue({name: 'English', id: 'en'});
    });
  });

  test('test handleShowOptions and handleOptionValue controller method and when status of a question_type is numerical ', () => {
    const {result} = renderHook(
      useAnswerInstructionsController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                logs: [
                  {
                    status: 0,
                    _id: '123',
                    selected_option: ['A'],
                  },
                ],
              },
            },
            currentQuestionIdData: {
              _id: '123',
              question_type: 'Numerical',
            },
          },
        },
      },
    );

    waitFor(() => {
      result.current.toggleOptions();
      result.current.handleOptionValue({name: 'English', id: 'en'});
    });
  });

  test('test handleShowOptions and handleOptionValue controller method and when status of a question_type is other type ', () => {
    const {result} = renderHook(
      useAnswerInstructionsController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                logs: [
                  {
                    status: 0,
                    _id: '123',
                    selected_option: ['A'],
                  },
                ],
              },
            },
            currentQuestionIdData: {
              _id: '123',
              question_type: 'other',
            },
          },
        },
      },
    );

    waitFor(() => {
      result.current.toggleOptions();
      result.current.handleOptionValue({name: 'English', id: 'en'});
      expect(result.current.totalAnswered).toEqual(0);
      expect(result.current.totalNotAnswered).toEqual(0);
      expect(result.current.totalMarkedForReview).toEqual(0);
      expect(result.current.totalNotVisited).toEqual(0);
      expect(result.current.totalAnsweredMarkedForReview).toEqual(0);
    });
  });
});
