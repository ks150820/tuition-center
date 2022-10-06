import React from 'react';
import {fireEvent} from '@testing-library/react-native';

import {render} from '@store/util/test.util';
import FooterView from '../test-screen-footer-view';

describe('test-screen-footer-view', () => {
  test('test all the buttons available on test footer component', () => {
    const props = {
      openBottomSheet: jest.fn(),
      handleMarkAndReview: jest.fn(),
      saveNext: jest.fn(),
      clearCurrentAnswer: jest.fn(),
    };
    const {getAllByTestId} = render(<FooterView {...props} />);

    fireEvent.press(getAllByTestId('uibutton')[0]);
    fireEvent.press(getAllByTestId('uibutton')[1]);
    fireEvent.press(getAllByTestId('uibutton')[2]);
    fireEvent.press(getAllByTestId('uibutton')[3]);

    expect(props.openBottomSheet).toHaveBeenCalledTimes(1);
    expect(props.handleMarkAndReview).toHaveBeenCalledTimes(1);
    expect(props.saveNext).toHaveBeenCalledTimes(1);
    expect(props.clearCurrentAnswer).toHaveBeenCalledTimes(1);
  });
});
