import React from 'react';
import {Text} from 'react-native';
import {render} from 'test-helper/test-renderer';
import {UIControllerContainer} from '../ui-controller-container';

test('Controller container test cases', () => {
  const testId = 'test';
  // Render view
  const {getByTestId} = render(
    <UIControllerContainer>
      <UIControllerContainer.LeftControllerActions>
        <Text testID={testId}>{'Any controller view'}</Text>
      </UIControllerContainer.LeftControllerActions>
    </UIControllerContainer>,
  );

  // Get view by test id
  const textView = getByTestId(testId);
  // Expect rendered text correctly or not
  expect(textView.children[0]).toBe('Any controller view');
});
