import {useSelector} from 'react-redux';
import {getAppLanguage} from 'store/entities/user-preferences';

/**
 * View Controller for video quality setting
 * @returns
 */
const useSettingQualityViewController = () => {
  const appLanguage: SupportedLanguage = useSelector(getAppLanguage);
  return {appLanguage};
};

export default useSettingQualityViewController;
