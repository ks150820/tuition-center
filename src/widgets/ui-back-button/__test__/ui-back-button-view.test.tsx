import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import BackButtonView from '../ui-back-button-view';

test('back button test cases', () => {
  // Mock event handler
  const handleBackPress = jest.fn();
  // Render view
  const {getByTestId} = render(
    <BackButtonView onBackPress={handleBackPress} />,
  );

  // Get button by test id
  const backButton = getByTestId('backButton');
  // Perform press event programmatically
  fireEvent.press(backButton);
  // Expect handler to be called
  expect(handleBackPress).toBeCalled();
});
