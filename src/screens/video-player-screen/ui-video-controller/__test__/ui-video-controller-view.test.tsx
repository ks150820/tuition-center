import React from 'react';
import {View} from 'react-native';
import {render} from '@store/util/test.util';
import VideoControllerView from '../ui-video-controller-view';

test('Video controller view test cases', () => {
  // Mock event handler
  const handleControllerOverlayPress = jest.fn();
  // Render view
  const {getByText} = render(
    <VideoControllerView
      showController={true}
      onControllerOverlayPress={handleControllerOverlayPress}>
      <View />
    </VideoControllerView>,
  );

  // Expect exact value which we passed as prop
  const header = getByText('Video Title');
  expect(header.props.children).toBe('Video Title');
});
