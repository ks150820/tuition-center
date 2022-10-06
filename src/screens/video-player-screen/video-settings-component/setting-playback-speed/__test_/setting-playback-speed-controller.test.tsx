import {renderHook} from '@store/util/test.util';
import useSettingPlaybackSpeedViewController from '../setting-playback-speed-controller';

test('Playback speed setting controller test cases', () => {
  // Render hook
  const {result} = renderHook(useSettingPlaybackSpeedViewController);

  // Verify default app language
  expect(result.current.appLanguage).toEqual('en');
});
