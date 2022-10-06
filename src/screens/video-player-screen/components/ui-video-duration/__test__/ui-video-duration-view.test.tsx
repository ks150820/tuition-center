import React from 'react';
import {render} from 'test-helper/test-renderer';
import VideoDurationView from '../ui-video-duration-view';

test('Video duration test cases', () => {
  const totalDuration = '20:00';
  const durationPlayed = '05:30';
  // Render view
  const {getByText} = render(
    <VideoDurationView
      totalDuration={totalDuration}
      durationPlayed={durationPlayed}
    />,
  );

  // Expect exact value which we passed as prop
  const labelTotalDuration = getByText(totalDuration);
  expect(labelTotalDuration.props.children).toBe(totalDuration);

  // Expect exact value which we passed as prop
  const labelDurationPlayed = getByText(durationPlayed);
  expect(labelDurationPlayed.props.children).toBe(durationPlayed);
});
