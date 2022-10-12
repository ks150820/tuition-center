import React from 'react';
import QualitySelectorModal from 'screens/video-player-screen/quality-selector-modal';
import VideoPlayerView from './video-player-view';
import useVideoPlayerViewController, {
  VideoPlayerCTX,
} from './video-player-view-controller';
import {VideoProperties} from 'react-native-video';
import {VIDEO_TYPES} from './resources/constants';

interface IVideoPlayerProps extends VideoProperties {
  // Child components like All video controls
  children?: React.ReactElement;
  // Flag to show default player controls
  controls?: boolean;
  // Video streaming type
  videoType?: string;
}

/**
 * Binder for Video player view
 * @param {IVideoPlayerProps} props
 * @returns
 */
const VideoPlayer: React.FunctionComponent<IVideoPlayerProps> = ({
  // uri = '',
  controls,
  resizeMode,
  children,
  source,
  videoType = VIDEO_TYPES.RECORDED_VIDEO,
}) => {
  const {
    onBuffer,
    onError,
    playerRef,
    togglePlayPause,
    isPaused,
    orientation,
    changeOrientation,
    isMute,
    toggleMute,
    onSeek,
    playbackRate,
    handlePlayBackRateChange,
    videoQuality,
    handleVideoQualityChange,
    videoDuration,
    onLoad,
    onLoadStart,
    onProgress,
    onVideoEnd,
    isVideoEnded,
    settingModalVisible,
    handleSettingModalVisibility,
    showController,
    onControllerOverlayPress,
    onSlidingStart,
    onSlidingComplete,
    isLoading,
    isBuffering,
    onSeekCb,
    onRetryPress,
    videoErrorDetails,
    isLiveLagging,
    onLiveRequest,
  } = useVideoPlayerViewController();

  const value = React.useMemo(
    () => ({
      playerRef,
      togglePlayPause,
      changeOrientation,
      isPaused,
      orientation,
      toggleMute,
      isMute,
      onSeek,
      playbackRate,
      handlePlayBackRateChange,
      videoQuality,
      handleVideoQualityChange,
      videoDuration,
      isVideoEnded,
      settingModalVisible,
      handleSettingModalVisibility,
      showController,
      onControllerOverlayPress,
      onSlidingStart,
      onSlidingComplete,
      isLoading,
      isBuffering,
      videoType,
      isLiveLagging,
      onLiveRequest,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      isPaused,
      orientation,
      isMute,
      playbackRate,
      videoQuality,
      videoDuration,
      isVideoEnded,
      settingModalVisible,
      showController,
      isLiveLagging,
    ],
  );
  return (
    <VideoPlayerCTX.Provider value={value}>
      <VideoPlayerView
        source={source}
        playerRef={playerRef}
        onBuffer={onBuffer}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onError={onError}
        controls={controls}
        resizeMode={resizeMode}
        paused={isPaused}
        children={children}
        orientation={orientation}
        muted={isMute}
        rate={playbackRate.value}
        selectedTrack={videoQuality.selectedVideoTrack}
        onProgress={onProgress}
        onVideoEnd={onVideoEnd}
        isLoading={isLoading}
        isBuffering={isBuffering}
        onSeekCb={onSeekCb}
        onRetryPress={onRetryPress}
        videoErrorMessage={videoErrorDetails.videoErrorMessage}
      />
      {videoQuality.availableVideoQualities.length > 1 && (
        <QualitySelectorModal
          options={videoQuality.availableVideoQualities}
          selectedOption={videoQuality.selectedVideoTrack}
          handleOnChange={handleVideoQualityChange}
        />
      )}
    </VideoPlayerCTX.Provider>
  );
};

export default VideoPlayer;
