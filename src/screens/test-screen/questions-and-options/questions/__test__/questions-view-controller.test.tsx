import {waitFor} from '@testing-library/react-native';

import {renderHook} from '@store/util/test.util';
import useQuestionsController from '../questions-view-controller';

test('test controller when question is in the state', () => {
  const {result} = renderHook(
    useQuestionsController,
    {},
    {
      entities: {
        testExperience: {
          test_language: 'en',
          currentQuestionIdData: {
            text: {
              en: '<p>First Question</p>',
              hi: '<p>First Question</p>',
            },
          },
        },
      },
    },
  );

  waitFor(() => {
    expect(result.current.questionData).toEqual('<p>First Question</p>');
  });
});

test('test controller when question text is not in the state', () => {
  const {result} = renderHook(
    useQuestionsController,
    {},
    {
      entities: {
        testExperience: {
          test_language: 'en',
          currentQuestionIdData: {},
        },
      },
    },
  );

  waitFor(() => {
    expect(result.current.questionData).toEqual('');
  });
});
