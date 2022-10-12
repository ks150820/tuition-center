import React from 'react';
import useSettingPlaybackSpeedViewController from './setting-playback-speed-controller';
import SettingPlaybackSpeedView from './setting-playback-speed-view';

/**
 * Binder for playback speed setting
 * @param props
 * @returns
 */
const SettingPlaybackSpeed: React.FunctionComponent<
  ISettingOptionWrapperProps
> = props => {
  const {appLanguage} = useSettingPlaybackSpeedViewController();

  return <SettingPlaybackSpeedView appLanguage={appLanguage} {...props} />;
};

export default SettingPlaybackSpeed;
