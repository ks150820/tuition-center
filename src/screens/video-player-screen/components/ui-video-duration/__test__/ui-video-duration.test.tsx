import React from 'react';
import {render} from 'test-helper/test-renderer';
import VideoDurationView from '../ui-video-duration';

test('Video duration binding with ui-video-duration-view ', () => {
  const totalDuration = '20:00';
  const durationPlayed = '05:30';
  // Render view
  const {queryByText} = render(
    <VideoDurationView
      totalDuration={totalDuration}
      durationPlayed={durationPlayed}
    />,
  );
  // Expect exact value which we passed as prop
  const el = queryByText(totalDuration);
  expect(el).toBeDefined();
});
