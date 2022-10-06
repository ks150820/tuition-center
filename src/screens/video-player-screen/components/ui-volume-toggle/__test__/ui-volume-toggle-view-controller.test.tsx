import {act} from '@testing-library/react-native';
import {renderHook} from 'test-helper/test-renderer';
import useVolumeToggleController from '../ui-volume-toggle-view-controller';

test('mute should toggle to true when toggleMute is called', () => {
  // Render hook
  const {result} = renderHook(() =>
    useVolumeToggleController({toggleCb: jest.fn}),
  ); // false

  // Perform function call programmatically
  act(() => {
    result.current.toggleMute();
  });
  expect(result.current.mute).toBe(true); // true
});

test('mute icon should show volume-mute icon when toggleMute is called', () => {
  // Render hook
  const {result} = renderHook(() =>
    useVolumeToggleController({toggleCb: jest.fn}),
  ); // false

  // Perform function call programmatically
  act(() => {
    result.current.toggleMute();
  });
  expect(result.current.iconName).toContain('volume-mute'); // true
});
