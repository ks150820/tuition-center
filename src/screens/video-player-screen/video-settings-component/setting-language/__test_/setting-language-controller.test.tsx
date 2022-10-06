import {renderHook} from 'test-helper/test-renderer';
import useSettingLanguageViewController from '../setting-language-controller';

test('Language setting controller test cases', () => {
  // Render hook
  const {result} = renderHook(useSettingLanguageViewController);

  // Verify default app language
  expect(result.current.appLanguage).toEqual('en');
});
