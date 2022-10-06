import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';

import {render} from '@store/util/test.util';
import UIInputView from '../ui-input-view';

describe('ui-input-view', () => {
  test('test onChangeText method', () => {
    const props = {
      placeholder: 'placeholder',
      inputValue: '123',
      onChangeText: jest.fn(),
    };
    const {getByTestId} = render(
      <UIInputView keyboardType="phone-pad" {...props} />,
    );

    waitFor(() => {
      fireEvent.changeText(getByTestId('input'), 123);
      expect(props.onChangeText).toHaveBeenCalledTimes(1);
    });
  });
});
