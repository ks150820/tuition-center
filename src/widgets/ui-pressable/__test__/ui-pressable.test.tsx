import {fireEvent} from '@testing-library/react-native';
import React from 'react';
import {View} from 'react-native';
import {render} from 'test-helper/test-renderer';
import UIPressable from '../ui-pressable';

test('UI Pressable test cases', () => {
  // Mock event handler
  const onPress = jest.fn();
  // Render view
  const {getByTestId} = render(
    <UIPressable onPress={onPress} testID={'uiPressable'}>
      <View />
    </UIPressable>,
  );

  // Verify callback by programmatically firing press event
  const button = getByTestId('uiPressable');
  fireEvent.press(button);
  expect(onPress).toBeCalled();
});
