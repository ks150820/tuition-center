import {act} from 'react-test-renderer';
import {renderHook} from 'test-helper/test-renderer';
import useVideoSettingsComponentController from '../video-settings-component-view-controller';

test('Video setting controller test cases', () => {
  // Mock event handler
  const handleToggleSettings = jest.fn();
  // Render hook
  const {result} = renderHook(useVideoSettingsComponentController, {
    handleToggleSettings,
  });

  // Verify default app language
  expect(result.current.appLanguage).toEqual('en');

  // Fire function programmatically and verify it called
  act(() => {
    result.current.onHideSettingOption();
  });
  expect(handleToggleSettings).toBeCalled();
});
