import React from 'react';
import {useVideoPlayerContext} from 'screens/video-player-screen/video-player/video-player-view-controller';
import VideoSettingsComponent from 'screens/video-player-screen/video-settings-component';

/**
 * Component for quality setting
 * @returns
 */
const VideoControllerSettingQuality: React.FunctionComponent = () => {
  // Destructure required data from player context
  const {videoQuality, handleVideoQualityChange} = useVideoPlayerContext();
  return (
    <>
      {VideoSettingsComponent.SettingQuality && (
        <VideoSettingsComponent.SettingQuality
          options={videoQuality.availableVideoQualities}
          selectedOption={videoQuality.selectedVideoTrack}
          onChange={handleVideoQualityChange}
        />
      )}
    </>
  );
};

export default VideoControllerSettingQuality;
