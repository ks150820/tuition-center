import React from 'react';
import {fireEvent} from '@testing-library/react-native';

import {render} from '@store/util/test.util';
import AnswerStatusView from '../answer-status-view';

describe('answer-status-view', () => {
  test('test for button', () => {
    const {getByTestId} = render(
      <AnswerStatusView
        text="Answered"
        number={0}
        bgColor="#fff"
        textColor="#000"
      />,
    );

    fireEvent.press(getByTestId('uibutton'));
  });

  test('test component for Answered Marked to display the icon', () => {
    const {getByText} = render(
      <AnswerStatusView
        text="Answered & Marked for review"
        number={0}
        bgColor="#fff"
      />,
    );

    expect(getByText('Answered & Marked for review').props.children).toBe(
      'Answered & Marked for review',
    );
  });
});
