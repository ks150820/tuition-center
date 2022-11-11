import React from 'react';
import {act, fireEvent} from '@testing-library/react-native';
import {render} from '@store/util/test.util';
import VideoError from '../video-error';

test('Video error test cases', () => {
  // Mock event handler
  const handleRetryPress = jest.fn();
  // Render view
  const {getByText} = render(
    <VideoError
      errorMessage="error occurred"
      onRetryPress={handleRetryPress}
    />,
  );
  // Verify handler by firing press event programmatically
  act(() => {
    const btnRetry = getByText('Retry');
    fireEvent.press(btnRetry);
  });
  expect(handleRetryPress).toBeCalled();
});
