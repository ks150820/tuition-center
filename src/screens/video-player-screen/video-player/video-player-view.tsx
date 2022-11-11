import React from 'react';
import {SafeAreaView, ActivityIndicator, View} from 'react-native';
import Video, {VideoProperties} from 'react-native-video';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';
import {styles} from './resources/styles';
import {styles as controllerStyles} from '../ui-video-controller/resources/styles/styles';
import VideoError from 'screens/video-player-screen/video-error';
import {COLORS} from 'resources/colors';
import LiveClassChatScreen from '@screens/live-class-chat-screen';

interface IVideoPlayerViewProps extends VideoProperties {
  // Screen orientation
  orientation: any;
  // Player reference
  playerRef: any;
  // Seek event
  onSeekCb: (data: OnSeekData) => void;
  // Flag for loading state
  isLoading: boolean;
  // Flag for buffering state
  isBuffering: boolean;
  // Callback for retry after error occurs
  onRetryPress: () => void;
  // Video error message
  videoErrorMessage: string;
  // Selected video track
  selectedTrack: ISingleSelectOptions;
}

/**
 * View for VideoPlayer
 * @param {IVideoPlayerViewProps} props
 * @returns
 */

const INDICATOR_SIZE = 'large';

const VideoPlayerView: React.FunctionComponent<IVideoPlayerViewProps> = ({
  source,
  playerRef,
  style = styles.videoContainer,
  onBuffer,
  onError,
  controls = false,
  resizeMode,
  paused,
  orientation,
  muted,
  rate,
  onLoad,
  selectedTrack,
  onProgress,
  onVideoEnd,
  isLoading,
  isBuffering,
  onLoadStart,
  onSeekCb,
  children,
  onRetryPress,
  videoErrorMessage,
}) => {
  const showLoader = isLoading || isBuffering;
  return (
    <SafeAreaView style={styles.container}>
      <OrientationLocker orientation={orientation} />
      {showLoader && (
        <ActivityIndicator
          animating
          size={INDICATOR_SIZE}
          color={COLORS.PRIMARY}
          style={[
            styles.activityIndicator,
            orientation === PORTRAIT ? controllerStyles.bottomPortrait : {},
            showLoader ? styles.opacityLevel : {},
          ]}
          testID="loader"
        />
      )}
      {videoErrorMessage ? (
        <VideoError
          errorMessage={videoErrorMessage}
          onRetryPress={onRetryPress}
        />
      ) : (
        <View style={styles.chatVideoContainer}>
          <>
            <Video
              ref={playerRef}
              source={source}
              style={style}
              controls={controls}
              onBuffer={onBuffer}
              resizeMode={resizeMode}
              paused={paused}
              onError={onError}
              muted={muted}
              rate={rate}
              onLoad={onLoad}
              onLoadStart={onLoadStart}
              selectedVideoTrack={{
                type: selectedTrack.type ? selectedTrack.type : 'auto',
                value: selectedTrack.value,
              }}
              onProgress={onProgress}
              onEnd={onVideoEnd}
              onSeek={onSeekCb}
            />
            {children}
          </>
          {orientation === PORTRAIT && (
            <LiveClassChatScreen containerStyle={styles.chatContainer} />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default VideoPlayerView;
