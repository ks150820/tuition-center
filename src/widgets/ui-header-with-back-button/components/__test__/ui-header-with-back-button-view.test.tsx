import React from 'react';
import {render} from '@testing-library/react-native';
import HeaderWithBackButtonView from '../ui-header-with-back-button-view';

test('Header with back test cases', () => {
  // Mock event handler
  const handleBackPress = jest.fn();

  // Render view
  const {getByText} = render(
    <HeaderWithBackButtonView
      onBackPress={handleBackPress}
      label="Playback Speed"
    />,
  );

  // Verify prop value
  const label = getByText('Playback Speed');
  expect(label.props.children).toEqual('Playback Speed');
});
