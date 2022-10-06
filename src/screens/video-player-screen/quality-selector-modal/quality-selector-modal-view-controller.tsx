import {useState, useEffect} from 'react';
import {useVideoPlayerContext} from 'screens/video-player-screen/video-player/video-player-view-controller';

/**
 * View Controller for QualitySelectorModal
 * @param props
 * @returns
 */
const useQualitySelectorModalViewController = () => {
  // Destructure required data from player context
  const {togglePlayPause} = useVideoPlayerContext();
  const [isVisible, setVisible] = useState(true);

  // Hide/show modal
  const toggleModal = (show: boolean) => {
    setVisible(show);
  };

  // Hook to play/pause the video.
  useEffect(() => {
    if (!isVisible) {
      togglePlayPause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return {toggleModal, isVisible};
};

export default useQualitySelectorModalViewController;
