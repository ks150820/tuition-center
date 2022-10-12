import {renderHook} from '@store/util/test.util';
import useSettingQualityViewController from '../setting-quality-controller';

test('Quality setting controller test cases', () => {
  // Render hook
  const {result} = renderHook(useSettingQualityViewController);

  // Verify default app language
  expect(result.current.appLanguage).toEqual('en');
});
