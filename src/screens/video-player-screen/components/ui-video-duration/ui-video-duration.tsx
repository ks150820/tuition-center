import VideoDurationView from './ui-video-duration-view';
import React from 'react';
import useVideoDurationViewController from './ui-video-duration-view-controller';

/**
 * Component for video duration indicator
 * @param {IVideoDurationBinderProps} props
 * @returns
 */
const VideoDuration: React.FunctionComponent<IVideoDurationBinderProps> = ({
  totalDuration,
  durationPlayed,
  videoType,
}) => {
  const {animatedValue, isLiveVideo, isLiveLagging, onLiveRequest} =
    useVideoDurationViewController({
      videoType,
    });

  return (
    <VideoDurationView
      totalDuration={totalDuration}
      durationPlayed={durationPlayed}
      isLiveVideo={isLiveVideo}
      isLiveLagging={isLiveLagging}
      onLiveRequest={onLiveRequest}
      animatedValue={animatedValue}
    />
  );
};

export default VideoDuration;
