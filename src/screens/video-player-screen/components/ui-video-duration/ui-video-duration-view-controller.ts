import {VIDEO_TYPES} from '@screens/video-player-screen/video-player/resources/constants';
import {useVideoPlayerContext} from '@screens/video-player-screen/video-player/video-player-view-controller';
import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

interface IVideoDurationViewControllerProps {
  videoType?: string;
}

const useVideoDurationViewController = ({
  videoType,
}: IVideoDurationViewControllerProps) => {
  const isLiveVideo = videoType === VIDEO_TYPES.LIVE_VIDEO;
  const {isLiveLagging, onLiveRequest} = useVideoPlayerContext();

  const anim = useRef(new Animated.Value(1));

  useEffect(() => {
    // Need to animate only when live video is not lagging
    if (!isLiveLagging) {
      // makes the sequence loop
      Animated.loop(
        // runs given animations in a sequence
        Animated.sequence([
          // decrease size
          Animated.timing(anim.current, {
            toValue: 0.7,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(anim.current, {
            // increase size
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }
  }, [isLiveVideo, isLiveLagging]);

  return {
    animatedValue: anim.current,
    isLiveVideo,
    isLiveLagging,
    onLiveRequest,
  };
};

export default useVideoDurationViewController;
