import React from 'react';
import {NavigationContext} from '@react-navigation/native';
import {fireEvent} from '@testing-library/react-native';

import {render} from '@store/util/test.util';
import TestContext from '@components/contexts/test-context';
import QuestionPanelView from '../question-panel-view';

describe('question-panel-view', () => {
  // fake NavigationContext value data
  const navContext: any = {
    isFocused: () => true,
    // addListener returns an unscubscribe function.
    addListener: jest.fn(() => jest.fn()),
  };
  test('test the buttons for question tabs component', () => {
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
    const {getAllByTestId} = render(
      <NavigationContext.Provider value={navContext}>
        <TestContext.Provider value={contextObject}>
          <QuestionPanelView infoButton={true} />
        </TestContext.Provider>
      </NavigationContext.Provider>,
      {
        preloadedState: {
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
      },
    );

    fireEvent.press(getAllByTestId('uibutton')[0]);
    fireEvent.press(getAllByTestId('uibutton')[1]);
  });
});
