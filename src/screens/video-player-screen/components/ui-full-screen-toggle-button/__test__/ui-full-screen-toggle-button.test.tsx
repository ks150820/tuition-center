import React from 'react';
import {render} from 'test-helper/test-renderer';
import UIFullScreenToggleButton from '../ui-full-screen-toggle-button';

test('Full screen button test cases', () => {
  const testID = 'fullscreenToggleBtnTest';

  // Render view
  const {getByTestId} = render(
    <UIFullScreenToggleButton color="yellow" testID={testID} />,
  );

  // Get element by test id
  const fullscreenToggleBtn = getByTestId(testID);

  // Verify passed value
  expect(fullscreenToggleBtn.props.children[0].props.children.props.color).toBe(
    'yellow',
  );
});
