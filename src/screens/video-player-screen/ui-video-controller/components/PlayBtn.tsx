import React from 'react';
import {useVideoPlayerContext} from 'screens/video-player-screen/video-player/video-player-view-controller';
import PlayButton from '../../components/ui-play-button';

/**
 * Compounding component for Play/pause toggle button
 * @param {IStyleProps} params
 * @returns
 */
const PlayBtn: React.FunctionComponent<IStyleProps> = ({style}) => {
  // Destructure required data from player context
  const {isPaused, isVideoEnded, togglePlayPause} = useVideoPlayerContext();
  return (
    <PlayButton
      style={style}
      toggleCb={togglePlayPause}
      defaultValue={isPaused}
      isVideoEnded={isVideoEnded}
    />
  );
};

export default PlayBtn;
