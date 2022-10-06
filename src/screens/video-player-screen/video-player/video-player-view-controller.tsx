import {useState, useRef, createContext, useContext, useEffect} from 'react';
import {PORTRAIT, LANDSCAPE} from 'react-native-orientation-locker';

/**
 * View Controller for VideoPlayer
 * @param props
 * @returns
 */

export const playbackSpeedOptions = [
  {key: '1', label: '0.25X', value: 0.25},
  {key: '2', label: '0.5X', value: 0.5},
  {key: '3', label: '0.75X', value: 0.75},
  {key: '4', label: '1X', value: 1},
  {key: '5', label: '1.25X', value: 1.25},
  {key: '6', label: '1.5X', value: 1.5},
  {key: '7', label: '1.75X', value: 1.75},
  {key: '8', label: '2X', value: 2},
];

const useVideoPlayerViewController = (): IPlayerViewReturnProps => {
  // Reference for video player
  const playerRef = useRef<Video>();
  const showControllerTimer = useRef<number>(0);

  // UseState hook to store different states
  const [isLoading, updateLoading] = useState(false);
  const [isBuffering, updateBuffering] = useState(false);
  const [isPaused, setPause] = useState(true);
  const [orientation, setOrientation] = useState(LANDSCAPE);
  const [isMute, setMute] = useState(false);
  const [isVideoEnded, setVideoEnded] = useState(false);
  const [seekValue, setSeekValue] = useState(0);
  const [playbackRate, updatePlayBackRate] = useState(playbackSpeedOptions[3]);
  const [videoQuality, updateVideoQuality] = useState<IVideoQualityProps>({
    availableVideoQualities: [
      {type: 'auto', label: 'auto', value: 0, key: 'auto'},
    ],
    selectedVideoTrack: {
      type: 'auto',
      label: 'auto',
      value: 0,
      key: 'auto',
    },
  });
  const [videoDuration, updateVideoDuration] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [settingModalVisible, setSettingModalVisible] = useState(false);
  const [showController, updateShowController] = useState(true);
  const [isLiveLagging, setIsLiveLagging] = useState(false);
  const [videoErrorDetails, setVideoErrorDetails] = useState({
    videoErrorMessage: '',
    lastPosition: 0,
    isRetryVideoRequested: false,
  });

  // Video onSeek callback
  const onSeekCb = ({currentTime}: OnSeekData) => {
    updateVideoDuration(prevState => ({
      ...prevState,
      currentTime,
    }));
  };

  // On every state change of show controller fire hide controller event
  useEffect(() => {
    if (isPaused) {
      // If video paused than consider as live video lagging
      setIsLiveLagging(true);
    } else {
      // If video is in play mode and not at end state than hide controllers
      !isVideoEnded && handleHideController();
    }

    return () => {
      cancelHideControllerTask();
    };
  }, [showController, isPaused, isVideoEnded]);

  // Handle request to seek video at live state
  const onLiveRequest = () => {
    // If video is in play state than only disable live lagging
    if (!isPaused) {
      setIsLiveLagging(false);
      playerRef.current?.seek(videoDuration.duration);
    }
  };

  // Handler to hide controller after given delay
  const handleHideController = () => {
    showControllerTimer.current = setTimeout(() => {
      updateShowController(false);
    }, 3000);
  };

  // On user interaction with controller stop hide controller task
  const cancelHideControllerTask = () => {
    clearTimeout(showControllerTimer.current);
  };

  // Handler to toggle modal visibility
  const handleSettingModalVisibility = ({visible}: {visible: boolean}) => {
    setSettingModalVisible(visible);
    if (visible) {
      cancelHideControllerTask();
    } else {
      handleHideController();
    }
  };

  // Handler to toggle play/pause
  const togglePlayPause = () => {
    // If video ended than replay video
    if (isVideoEnded) {
      playerRef.current?.presentFullscreenPlayer();
      setVideoEnded(false);
      setPause(false);
      onSeek(0);
      return;
    }
    setPause(prevState => !prevState);
  };

  // clear the timer, so that the controller does not get hidden, when the user is dragging the seek-bar.
  const onSlidingStart = () => {
    cancelHideControllerTask();
  };
  const onSlidingComplete = (data: number) => {
    onSeek((data / 100) * videoDuration.duration);
    // set the timer to hide the controller once the user has stopped dragging.
    !isPaused && handleHideController();
  };
  const onBuffer = ({isBuffering: buffering}: IVideoBufferingProps) => {
    updateBuffering(buffering);
  };

  // Method will trigger on error occurrence
  const onError = () => {
    updateLoading(false);
    updateBuffering(false);
    setPause(true);
    setVideoErrorDetails({
      ...videoErrorDetails,
      videoErrorMessage: 'Something went wrong!',
    });
  };

  // Method will trigger when user presses retry button from video error screen
  const onRetryPress = () => {
    const currentTime = videoDuration.currentTime;
    setPause(false);
    setVideoErrorDetails({
      videoErrorMessage: '',
      isRetryVideoRequested: true,
      lastPosition: currentTime,
    });
  };

  // Handler to update playback rate
  const handlePlayBackRateChange = (option: ISingleSelectOptions) => {
    updatePlayBackRate(option);
  };

  // Handler to update quality
  const handleVideoQualityChange = (videoTrack: ISingleSelectOptions) => {
    updateVideoQuality(prevState => {
      return {...prevState, selectedVideoTrack: videoTrack};
    });
  };

  // Change screen orientation accordingly
  useEffect(() => {
    const newOrientation = orientation === LANDSCAPE ? PORTRAIT : LANDSCAPE;
    const fullScreen = newOrientation === LANDSCAPE;
    if (playerRef.current) {
      if (!fullScreen) {
        playerRef.current.presentFullscreenPlayer();
      } else {
        playerRef.current.dismissFullscreenPlayer();
      }
    }
  }, [orientation]);

  // Handler to update orientation
  const changeOrientation = () => {
    const newOrientation = orientation === LANDSCAPE ? PORTRAIT : LANDSCAPE;
    setOrientation(newOrientation);
  };

  // Handler to toggle mute/unmute
  const toggleMute = () => {
    setMute(prevMuteVal => !prevMuteVal);
  };

  // Handler to seek video to the desire position
  const onSeek = (seekedValue: number) => {
    setSeekValue(seekedValue);
    playerRef.current?.seek(seekedValue);
  };

  // Method to get quality label based on video resolution
  const getResolution = (resolution: number) => {
    if (resolution >= 360 && resolution < 480) {
      return '360p';
    } else if (resolution >= 480 && resolution < 640) {
      return '480p';
    } else if (resolution >= 640 && resolution < 720) {
      return '640p';
    } else if (resolution >= 720 && resolution < 1080) {
      return '720p. Good picture resolution<p>';
    } else if (resolution >= 1080) {
      return '1080p. Best picture resolution, highest data usage';
    } else {
      return '240p Low data usage, low picture Quality';
    }
  };

  // Bind video qualities on load of video
  const updateAvailableVideoQualitiesOnLoad = (
    videoTracks: IPlayerVideoTrack[],
  ) => {
    if (!videoTracks || !videoTracks.length) {
      return;
    }
    const trackType: VideoTrackType = 'resolution';
    const qualities: ISingleSelectOptions[] = videoTracks
      .map(videoTrack => {
        return {
          value: videoTrack.height,
          label: getResolution(videoTrack.height),
          type: trackType,
          key: `${videoTrack.height}`,
        };
      })
      .sort((a, b) => b.value - a.value);

    updateVideoQuality({
      availableVideoQualities: [
        {label: 'auto', value: 0, key: 'auto', type: 'auto'},
        ...qualities,
      ],
      selectedVideoTrack: {
        value: 0,
        key: 'auto',
        type: 'auto',
        label: 'auto',
      },
    });
  };

  // Handler to update video duration after video successfully load
  const updateVideoDurationOnLoad = (data: OnLoadData) => {
    const {currentTime, duration} = data;
    if (!currentTime || !duration) {
      return;
    }
    // After video error if retry requested than resume from last known position
    if (videoErrorDetails.isRetryVideoRequested) {
      updateVideoDuration({
        currentTime: videoErrorDetails.lastPosition,
        duration,
      });
      playerRef.current?.presentFullscreenPlayer();
      playerRef.current?.seek(videoErrorDetails.lastPosition);
    } else {
      updateVideoDuration({currentTime, duration});
    }
  };

  // Callback when video uri loaded
  const onLoad = (data: OnLoadData) => {
    updateLoading(false);
    updateAvailableVideoQualitiesOnLoad(data.videoTracks);
    updateVideoDurationOnLoad(data);
  };

  // Callback when video uri start loading
  const onLoadStart = () => {
    updateLoading(true);
  };

  // Callback for periodic progress updates
  const onProgress = (data: OnProgressData) => {
    const {currentTime, seekableDuration} = data;
    updateVideoDuration({currentTime, duration: seekableDuration});
  };

  // Callback when video finish
  const onVideoEnd = () => {
    setVideoEnded(true);
  };

  // Handler for overlay tap/click event
  const onControllerOverlayPress = () => {
    updateShowController(prevState => !prevState);
  };

  return {
    playerRef,
    onBuffer,
    onError,
    isPaused,
    togglePlayPause,
    orientation,
    changeOrientation,
    isMute,
    toggleMute,
    seekValue,
    onSeek,
    playbackRate,
    handlePlayBackRateChange,
    videoQuality,
    handleVideoQualityChange,
    onLoad,
    onLoadStart,
    videoDuration,
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
  };
};

// Create context for video functionalities
export const VideoPlayerCTX = createContext<IVideoPlayerCtxProps | null>(null);

// Export context to used by child components
export function useVideoPlayerContext() {
  const context = useContext(VideoPlayerCTX);
  if (!context) {
    throw new Error(
      'Video Player compound components cannot be rendered outside the VideoPlayer component',
    );
  }
  return context;
}

export default useVideoPlayerViewController;
