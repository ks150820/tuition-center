import {useVideoPlayerContext} from 'screens/video-player-screen/video-player/video-player-view-controller';
import React from 'react';
import {Pressable, View} from 'react-native';
import {COLORS} from 'resources/colors';
import HeaderWithBackButton from 'widgets/ui-header-with-back-button';
import PlayButton from '../components/ui-play-button';
import {styles} from './resources/styles/styles';
import {PORTRAIT} from 'react-native-orientation-locker';

interface IVideoControllerViewProps {
  children: ReactNode;
  showController: boolean;
  onControllerOverlayPress: () => void;
}

/**
 * View for VideoController
 * @param {IVideoControllerViewProps} props
 * @returns
 */

const VIDEO_TITLE = 'Video Title';
const ICON_PLAY_SIZE = 30;
const ICON_REPLAY_SIZE = 40;

const VideoControllerView: React.FunctionComponent<
  IVideoControllerViewProps
> = ({children, showController = true, onControllerOverlayPress}) => {
  // Destructure required data from player context
  const {isPaused, isVideoEnded, togglePlayPause, orientation} =
    useVideoPlayerContext();

  return (
    <Pressable
      style={[
        styles.controllerOverlay,
        orientation === PORTRAIT ? styles.bottomPortrait : {},
      ]}
      onPress={onControllerOverlayPress}>
      <View
        style={[
          styles.controllerOverlayView,
          !showController ? styles.hide : {},
        ]}>
        <HeaderWithBackButton
          label={VIDEO_TITLE}
          backIconColor={COLORS.WHITE.white}
          labelColor={COLORS.WHITE.white}
        />

        <PlayButton
          toggleCb={togglePlayPause}
          defaultValue={isPaused}
          iconSize={isVideoEnded ? ICON_REPLAY_SIZE : ICON_PLAY_SIZE}
          isVideoEnded={isVideoEnded}
          style={styles.playBtn}
        />

        <View style={styles.viewWrap}>{children}</View>
      </View>
    </Pressable>
  );
};

export default VideoControllerView;
