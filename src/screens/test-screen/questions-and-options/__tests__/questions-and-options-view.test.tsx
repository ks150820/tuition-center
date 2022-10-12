import {fireEvent, waitFor} from '@testing-library/react-native';
import React from 'react';

import {render} from '@store/util/test.util';
import QuestionsAndOptionsView from '../questions-and-options-view';

test('test options component for mcq type', () => {
  const {getByTestId} = render(<QuestionsAndOptionsView />, {
    preloadedState: {
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
          test_language: 'en',
          currentQuestionIdData: {
            _id: '123',
            question_type: 'mcq',
            options: [
              {
                text: {
                  en: 'option 1',
                  hi: 'option 2',
                },
              },
            ],
            text: {
              en: '<p>First Question</p>',
              hi: '<p>First Question</p>',
            },
          },
        },
      },
    },
  });

  waitFor(() => {
    fireEvent.press(getByTestId('clickMCQ'));
  });
});
