import {useSelector} from 'react-redux';
import {getAppLanguage} from 'store/entities/user-preferences';

/**
 * View Controller for Playback speed setting
 * @returns
 */
const useSettingLanguageViewController = () => {
  const appLanguage = useSelector(getAppLanguage);
  return {appLanguage};
};

export default useSettingLanguageViewController;
