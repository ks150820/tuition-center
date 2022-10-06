import React from 'react';
import {render} from 'test-helper/test-renderer';
import PlayButton from '../ui-play-button';

test('Play button test cases', () => {
  const testID = 'playTest';

  // Render view
  const {getByTestId} = render(
    <PlayButton
      color="red"
      toggleCb={jest.fn()}
      testID={testID}
      defaultValue={false}
      isVideoEnded={false}
    />,
  );

  // Expect exact value which we passed as prop
  const playBtn = getByTestId(testID);
  expect(playBtn.props.children[0].props.children.props.color).toBe('red');
});
