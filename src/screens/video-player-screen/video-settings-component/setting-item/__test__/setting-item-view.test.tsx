import {fireEvent} from '@testing-library/react-native';
import React from 'react';
import {render} from '../../../../test-helper/test-renderer';
import SettingItemView from '../setting-item-view';

test('Setting item view test cases', () => {
  // Mock event handler
  const onPress = jest.fn();
  // Render view
  const {getByText, getByTestId} = render(
    <SettingItemView
      iconName=""
      iconType=""
      label="Test"
      value="default"
      onPress={onPress}
    />,
  );

  // Verify handler by triggering press event programmatically
  const pressable = getByTestId('pressable');
  fireEvent.press(pressable);
  expect(onPress).toBeCalled();

  // Verify text rendering
  const label = getByText('Test');
  expect(label.props.children).toEqual('Test');
});
