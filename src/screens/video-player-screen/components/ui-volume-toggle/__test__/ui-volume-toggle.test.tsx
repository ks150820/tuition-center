import React from 'react';
import {act} from '@testing-library/react-native';
import {renderHook, render} from '@store/util/test.util';
import useVolumeToggleController from '../ui-volume-toggle-view-controller';
import VolumeToggle from '../ui-volume-toggle';

test('ui-volume-toggle-btn binding with custom hook check', () => {
  // Render hook
  const {result} = renderHook(() =>
    useVolumeToggleController({toggleCb: jest.fn}),
  ); // false

  // Perform function call programmatically
  act(() => {
    result.current.toggleMute();
  });
  expect(result.current.mute).toBe(true); // true

  // Render view
  const {queryByText} = render(
    <VolumeToggle toggleCb={jest.fn} defaultValue />,
  );
  expect(queryByText('volume-mute')).toBeDefined();
});
