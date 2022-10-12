import React from 'react';
import {render} from '@store/util/test.util';
import InputComponentView from '../input-component-view';
import {fireEvent} from '@testing-library/react-native';

describe('input-component-view', () => {
  test('test text input and send message button', () => {
    const {getByTestId} = render(
      <InputComponentView
        message="testing"
        onChangeText={jest.fn()}
        sendMessage={jest.fn()}
      />,
    );

    fireEvent.changeText(getByTestId('input'), 'testing');
    fireEvent.press(getByTestId('send-message'));
  });
});
