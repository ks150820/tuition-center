import React from 'react';
import {View} from 'react-native';
import {useVideoPlayerContext} from 'screens/video-player-screen/video-player/video-player-view-controller';
import VideoDuration from '../../components/ui-video-duration';
import Slider from 'widgets/ui-slider';
import {VIDEO_TYPES} from 'screens/video-player-screen/video-player/resources/constants';

/**
 * Function to convert seconds to hh : mm : ss
 * @returns
 */
function secondsToTime(e: number) {
  if (isNaN(e)) {
    return '00:00';
  }
  const h = Math.floor(e / 3600)
    .toString()
    .padStart(2, '0');
  const m = Math.floor((e % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(e % 60)
    .toString()
    .padStart(2, '0');

  if (e >= 3600) {
    return h + ':' + m + ':' + s;
  }
  return m + ':' + s;
}

/**
 * Compounding component for Slider/Seek-bar along with video duration indicator
 * @returns
 */
const SeekBar: React.FunctionComponent = () => {
  const {videoDuration, onSlidingStart, onSlidingComplete, videoType} =
    useVideoPlayerContext();

  const isLiveVideo = videoType === VIDEO_TYPES.LIVE_VIDEO;
  const currentProgress = isLiveVideo
    ? 100
    : (Math.ceil(videoDuration.currentTime) * 100) /
        Math.ceil(videoDuration.duration) || 0;

  return (
    <View>
      <VideoDuration
        durationPlayed={secondsToTime(videoDuration.currentTime)}
        totalDuration={secondsToTime(videoDuration.duration)}
        videoType={videoType}
      />
      <Slider
        onSlidingComplete={onSlidingComplete}
        currentProgress={currentProgress}
        allowTouchTrack={!isLiveVideo}
        onSlidingStart={onSlidingStart}
      />
    </View>
  );
};

export default SeekBar;
