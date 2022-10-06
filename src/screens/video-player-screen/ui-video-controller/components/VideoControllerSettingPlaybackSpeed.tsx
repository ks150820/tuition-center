import React from 'react';
import {
  playbackSpeedOptions,
  useVideoPlayerContext,
} from 'screens/video-player-screen/video-player/video-player-view-controller';
import VideoSettingsComponent from 'screens/video-player-screen/video-settings-component';

/**
 * Component for playback speed setting
 * @returns
 */
const VideoControllerSettingPlaybackSpeed: React.FunctionComponent = () => {
  // Destructure required data from player context
  const {handlePlayBackRateChange, playbackRate} = useVideoPlayerContext();
  return (
    <>
      {VideoSettingsComponent.SettingPlaybackSpeed && (
        <VideoSettingsComponent.SettingPlaybackSpeed
          options={playbackSpeedOptions}
          selectedOption={playbackRate}
          onChange={handlePlayBackRateChange}
        />
      )}
    </>
  );
};

export default VideoControllerSettingPlaybackSpeed;
