import React from 'react';

import {render} from '@store/util/test.util';
import {fireEvent} from '@testing-library/react-native';
import SummaryView from '../summary-view';

describe('summary-view', () => {
  test('test component when test time is not finished and bottom sheet is opened', () => {
    const props = {
      statusData: [
        {
          text: 'Answered',
          number: 20,
        },
      ],
      isVisible: true,
      seconds: 5,
      timeUp: false,
      toggleBottomSheet: jest.fn(),
      handleSubmitButton: jest.fn(),
    };
    const {getByTestId, getAllByTestId} = render(<SummaryView {...props} />);

    fireEvent.press(getByTestId('downIcon'));
    fireEvent.press(getAllByTestId('uibutton')[0]);
    fireEvent.press(getAllByTestId('uibutton')[1]);
  });
  test('test component when test time is finished and seconds is greater than zero', () => {
    const props = {
      statusData: [
        {
          text: 'Answered',
          number: 20,
        },
      ],
      isVisible: true,
      seconds: 5,
      timeUp: true,
      toggleBottomSheet: jest.fn(),
      handleSubmitButton: jest.fn(),
    };
    const {getByTestId} = render(<SummaryView {...props} />);

    fireEvent.press(getByTestId('downIcon'));
  });
  test('test component when timeUp is true and seconds is equal and less than zero', () => {
    const props = {
      statusData: [
        {
          text: 'Answered',
          number: 20,
        },
      ],
      isVisible: true,
      seconds: 0,
      timeUp: true,
      toggleBottomSheet: jest.fn(),
      handleSubmitButton: jest.fn(),
    };
    const {getByTestId} = render(<SummaryView {...props} />);

    fireEvent.press(getByTestId('downIcon'));
  });
});
