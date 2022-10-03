import {waitFor} from '@testing-library/react-native';
import {renderHook} from '@store/util/test.util';

import useOptionsController from '../question-options-controller';

describe('options-controller', () => {
  test('controller test for mcq', () => {
    const {result} = renderHook(
      useOptionsController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                logs: [
                  {
                    _id: '123',
                    status: 0,
                    selected_option: ['A'],
                  },
                ],
              },
            },
            currentQuestionIdData: {
              _id: '123',
              question_type: 'mcq',
              options: [],
            },
            test_language: 'hi',
          },
        },
      },
    );

    waitFor(() => {
      result.current.handleOptions(0);
      result.current.handleIsChecked(0);
      result.current.onChangeText('123-45');
      result.current.onAnswerUpdate(2);
    });
    result.current.onOptionSelected(0);
  });

  test('controller test for msq when selected option is matches the OPTION_INDEX', () => {
    const {result} = renderHook(
      useOptionsController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                logs: [
                  {
                    _id: '123',
                    status: 0,
                    selected_option: ['A'],
                  },
                ],
              },
            },
            currentQuestionIdData: {
              _id: '123',
              question_type: 'msq',
              options: [],
            },
            test_language: 'hi',
          },
        },
      },
    );

    result.current.onOptionSelected(0);
    waitFor(() => {
      result.current.handleOptions(0);
      result.current.onChangeText('123-45');
      result.current.onAnswerUpdate(2);
    });
  });

  test('controller test for msq when selected option is not matches the OPTION_INDEX and selected_option is empty', () => {
    const {result} = renderHook(
      useOptionsController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                logs: [
                  {
                    _id: '123',
                    status: 0,
                    selected_option: [],
                  },
                ],
              },
            },
            currentQuestionIdData: {
              _id: '123',
              question_type: 'msq',
              options: [],
            },
            test_language: 'hi',
          },
        },
      },
    );

    result.current.onOptionSelected(0);
    waitFor(() => {
      result.current.onChangeText('123-45');
      result.current.onAnswerUpdate(2);
    });
  });

  test('controller test when question type does not match any type of questions', () => {
    const {result} = renderHook(
      useOptionsController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                logs: [
                  {
                    _id: '123',
                    status: 0,
                    selected_option: [],
                  },
                ],
              },
            },
            currentQuestionIdData: {
              _id: '123',
              question_type: 'mq',
              options: [],
            },
            test_language: 'hi',
          },
        },
      },
    );

    waitFor(() => {
      result.current.onChangeText('123-45');
      result.current.onAnswerUpdate(2);
    });
  });

  test('controller test for numeric', () => {
    const {result} = renderHook(
      useOptionsController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                logs: [
                  {
                    _id: '123',
                    status: 0,
                    selected_option: [],
                  },
                ],
              },
            },
            currentQuestionIdData: {
              _id: '123',
              question_type: 'numeric',
              options: [],
            },
            test_language: 'hi',
          },
        },
      },
    );

    result.current.onOptionSelected(0);
    waitFor(() => {
      result.current.onChangeText('123-45');
      result.current.onAnswerUpdate('12345567');
    });
  });
});
