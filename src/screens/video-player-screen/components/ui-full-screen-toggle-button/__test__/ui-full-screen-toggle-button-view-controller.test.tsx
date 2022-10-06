import {act} from 'react-test-renderer';
import {renderHook} from 'test-helper/test-renderer';
import useUIFullScreenToggleButtonViewController from '../ui-full-screen-toggle-button-view-controller';

test('Full screen toggler test cases', () => {
  // Mock event handler
  const fullScreenToggleCb = jest.fn();
  // Render view
  const {result} = renderHook(useUIFullScreenToggleButtonViewController, {
    defaultValue: true,
    fullScreenToggleCb,
  });

  // Perform function call programmatically
  act(() => {
    result.current.toggleFullScreen();
  });

  // Verify function called
  expect(fullScreenToggleCb).toBeCalled();
  expect(result.current.isFullScreen).toBe(false);
});
