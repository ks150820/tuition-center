import {renderHook} from 'test-helper/test-renderer';
import useSettingQualityViewController from '../setting-quality-controller';

test('Quality setting controller test cases', () => {
  // Render hook
  const {result} = renderHook(useSettingQualityViewController);

  // Verify default app language
  expect(result.current.appLanguage).toEqual('en');
});
