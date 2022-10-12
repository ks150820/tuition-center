import React from 'react';
import SettingLanguage from './setting-language';
import SettingPlaybackSpeed from './setting-playback-speed';
import SettingQuality from './setting-quality';
import {VideoSettingContext} from './resources/video-settings-context';
import VideoSettingsComponentView from './video-settings-component-view';
import useVideoSettingsComponentViewController from './video-settings-component-view-controller';

/**
 * Binder for video setting component
 * @param {IVideoSettingsComponentProps} props
 * @returns
 */
const VideoSettingsComponent: React.FunctionComponent<IVideoSettingsComponentProps> & {
  SettingQuality?: React.FunctionComponent<ISettingOptionWrapperProps>;
  SettingPlaybackSpeed?: React.FunctionComponent<ISettingOptionWrapperProps>;
  SettingLanguage?: React.FunctionComponent<ISettingOptionWrapperProps>;
} = ({children, handleToggleSettings, ...rest}) => {
  const {...restController} = useVideoSettingsComponentViewController({
    handleToggleSettings,
  });

  return (
    <VideoSettingContext.Provider value={restController.value}>
      <VideoSettingsComponentView {...rest} {...restController}>
        {children}
      </VideoSettingsComponentView>
    </VideoSettingContext.Provider>
  );
};

VideoSettingsComponent.SettingQuality = SettingQuality;
VideoSettingsComponent.SettingPlaybackSpeed = SettingPlaybackSpeed;
VideoSettingsComponent.SettingLanguage = SettingLanguage;

export default VideoSettingsComponent;
