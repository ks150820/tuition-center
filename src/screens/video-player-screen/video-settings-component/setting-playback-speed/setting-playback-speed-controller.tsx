import {useSelector} from 'react-redux';
import {getAppLanguage} from 'store/entities/user-preferences';

/**
 * View Controller for Playback speed setting
 * @returns
 */
const useSettingPlaybackSpeedViewController = () => {
  const appLanguage = useSelector(getAppLanguage);
  return {appLanguage};
};

export default useSettingPlaybackSpeedViewController;
