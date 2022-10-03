import React from 'react';
import {fireEvent} from '@testing-library/react-native';

import {render} from '@store/util/test.util';
import UIRadioButtonView from '../ui-radio-button-view';

describe('ui-radio-button-view', () => {
  test('test onPress method to make radio button clicked', () => {
    const {getByTestId} = render(
      <UIRadioButtonView isChecked={true} onPress={jest.fn()} />,
    );

    fireEvent.press(getByTestId('radioButton'));
  });
});
