import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {NavigationContext} from '@react-navigation/native';

import {render} from '@store/util/test.util';
import QuestionTabsView from '../question-tabs-view';

// fake NavigationContext value data
const navContext: any = {
  isFocused: () => true,
  // addListener returns an unscubscribe function.
  addListener: jest.fn(() => jest.fn()),
};

describe('question-tabs-view', () => {
  test('test info button', () => {
    const props = {
      questions: [{_id: '0'}],
      setQuestionIndex: () => {},
      flatListRefForQuestionTab: {current: jest.fn()},
      scrollToIndex: () => {},
      flatListRefForSections: {current: jest.fn()},
      handleQuestion: jest.fn(),
      toggleInfoButton: jest.fn(),
      getStatusClass: jest.fn(),
      setQuestionNo: jest.fn(),
    };
    const {getAllByTestId} = render(
      <NavigationContext.Provider value={navContext}>
        <QuestionTabsView {...props} />
      </NavigationContext.Provider>,
    );

    fireEvent.press(getAllByTestId('uibutton')[0]);
    fireEvent.press(getAllByTestId('uibutton')[1]);

    waitFor(() => {
      expect(props.toggleInfoButton).toHaveBeenCalledTimes(1);
    });
  });
  test('test status and color conditions of flatList render component', () => {
    const object: QuestionsStatusType = {
      '123': {
        colorCode: 'red',
        status: 1,
      },
    };
    const props: IQuestionTabsViewProps = {
      questions: [{_id: '123'}],
      setQuestionIndex: () => {},
      scrollToIndex: () => {},
      flatListRefForSections: {current: jest.fn()},
      handleQuestion: jest.fn(),
      toggleInfoButton: jest.fn(),
      getStatusClass: (id: string) => object[id],
      setQuestionNo: jest.fn(),
    };
    const {getAllByTestId} = render(
      <NavigationContext.Provider value={navContext}>
        <QuestionTabsView {...props} />
      </NavigationContext.Provider>,
    );

    fireEvent.press(getAllByTestId('uibutton')[0]);
    fireEvent.press(getAllByTestId('uibutton')[1]);

    waitFor(() => {
      expect(props.toggleInfoButton).toHaveBeenCalledTimes(1);
    });
  });
});
