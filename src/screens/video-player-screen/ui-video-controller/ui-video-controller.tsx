import React from 'react';
import VideoControllerView from './ui-video-controller-view';
import {useVideoPlayerContext} from 'screens/video-player-screen/video-player/video-player-view-controller';
import PlayBtn from './components/PlayBtn';
import FullScreenBtn from './components/FullScreenBtn';
import VolumeMuteBtn from './components/VolumeMuteBtn';
import SeekBar from './components/SeekBar';
import VideoControllerSettingQuality from './components/VideoControllerSettingQuality';
import Settings from './components/Settings';
import VideoControllerSettingPlaybackSpeed from './components/VideoControllerSettingPlaybackSpeed';

/**
 * Container component for video controllers
 * @param {IContainerProps} props
 * @returns
 */
const VideoController: React.FunctionComponent<IContainerProps> & {
  FullScreenBtn: React.FunctionComponent<IUIFullScreenToggleButtonProps>;
  PlayBtn: React.FunctionComponent<IStyleProps>;
  VolumeMuteBtn: React.FunctionComponent;
  SeekBar: React.FunctionComponent;
  Settings: React.FunctionComponent<IContainerProps>;
  PlaybackSpeed: React.FunctionComponent;
  Quality: React.FunctionComponent;
} = ({children}) => {
  // Destructure required data from player context
  const {showController, onControllerOverlayPress} = useVideoPlayerContext();
  return (
    <VideoControllerView
      showController={showController}
      onControllerOverlayPress={onControllerOverlayPress}>
      {children}
    </VideoControllerView>
  );
};

VideoController.PlayBtn = PlayBtn;
VideoController.FullScreenBtn = FullScreenBtn;
VideoController.VolumeMuteBtn = VolumeMuteBtn;
VideoController.SeekBar = SeekBar;
VideoController.Settings = Settings;
VideoController.PlaybackSpeed = VideoControllerSettingPlaybackSpeed;
VideoController.Quality = VideoControllerSettingQuality;

export {VideoController};
