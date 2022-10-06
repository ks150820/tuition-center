import React from 'react';
import {useVideoPlayerContext} from 'screens/video-player-screen/video-player/video-player-view-controller';
import VolumeToggle from '../../components/ui-volume-toggle';

/**
 * Component for mute button
 * @returns
 */
const VolumeMuteBtn: React.FunctionComponent = () => {
  // Destructure required data from player context
  const {isMute, toggleMute} = useVideoPlayerContext();

  return <VolumeToggle toggleCb={toggleMute} defaultValue={isMute} />;
};

export default VolumeMuteBtn;
