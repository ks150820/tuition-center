import React from 'react';
import {render} from '@store/util/test.util';
import VideoPlayerView from '../video-player-view';

test('Video player view test cases', () => {
  // Render view
  const {getByTestId} = render(
    <VideoPlayerView
      playerRef={null}
      isBuffering={false}
      isLoading
      orientation=""
      onSeekCb={jest.fn()}
      onRetryPress={jest.fn()}
      source={{uri: ''}}
      paused={false}
      videoErrorMessage={''}
    />,
  );

  // Verify passed props
  const loader = getByTestId('loader');
  expect(loader.props.size).toBe('large');
});
