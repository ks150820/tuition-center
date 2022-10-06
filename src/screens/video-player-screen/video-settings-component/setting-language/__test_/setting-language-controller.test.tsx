import {renderHook} from '@store/util/test.util';
import useSettingLanguageViewController from '../setting-language-controller';

test('Language setting controller test cases', () => {
  // Render hook
  const {result} = renderHook(useSettingLanguageViewController);

  // Verify default app language
  expect(result.current.appLanguage).toEqual('en');
});
