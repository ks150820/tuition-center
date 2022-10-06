type Video = import('react-native-video').default;
type LoadError = import('react-native-video').LoadError;
type OnLoadData = import('react-native-video').OnLoadData;
type OnSeekData = import('react-native-video').OnSeekData;
type OnProgressData = import('react-native-video').OnProgressData;

interface IVideoSettingsComponentViewController {
  appLanguage: SupportedLanguage;
  selectedSettingOption: ISelectedSettingOptionProps;
  onHideSettingOption: () => void;
  value: any;
  handleOnChange: (option: ISingleSelectOptions) => void;
}

interface IVideoSettingsComponentViewControllerProps {
  // Callback to toggle visibility state
  handleToggleSettings: () => void;
}

interface IVideoSettingsComponentViewProps {
  // App level user selected language
  appLanguage: SupportedLanguage;
  // Child views/elements
  children: ReactNode;
  // To show/hide setting component
  toggleSettings: boolean;
  // To modify styling
  style?: ViewStyle;
  // Currently viewing setting
  selectedSettingOption: ISelectedSettingOptionProps;
  // Hide inner setting options and show setting list
  onHideSettingOption: () => void;
  handleOnChange: (selectedOption: ISingleSelectOptions) => void;
}

interface IVideoSettingsComponentProps {
  // To show/hide setting component
  toggleSettings: boolean;
  // Callback to toggle visibility state
  handleToggleSettings: () => void;
  // To modify styling
  style?: ViewStyle;
  // To show all elements by default
  useDefault: boolean;
  // Child views/elements
  children: ReactNode;
}

interface ISettingItemViewProps {
  iconName: string;
  iconType: string;
  label: string;
  value: string;
  onPress: () => void;
}

interface ISettingItemProps extends ISettingItemViewProps {}

interface ISettingOptionViewControllerProps {
  // All supported setting options
  options: ISingleSelectOptions[];
  // Selected setting
  selectedOption: ISingleSelectOptions;
  // Callback for setting option change
  onChange: (selectedOption: ISingleSelectOptions) => void;
  // Label for sub setting screen
  placeHolder: string;
}

interface ISettingOptionViewProps {
  // Selected quality value
  selectedOption: ISingleSelectOptions;
  // Callback for change of quality
  handleSettingClick: () => void;
  // Setting sub screen label
  placeHolder: string;
  // Name for setting icon
  iconName: string;
  // Type of setting icon
  iconType: string;
}

interface IStyleProps {
  style: ViewStyle;
}

interface IContainerProps {
  children: ReactNode;
}

interface IVideoBufferingProps {
  isBuffering: boolean;
}

// export interface OnBufferData {
//   isBuffering: boolean;
// }

interface IVideoDurationProps {
  currentTime: number;
  duration: number;
}

interface IVideoErrorProps {
  videoErrorMessage: string;
  lastPosition: number;
  isRetryVideoRequested: boolean;
}

interface IVideoPlayerCtxProps {
  playerRef: import('react').MutableRefObject<Video | undefined>;
  isPaused: boolean;
  togglePlayPause: () => void;
  orientation: string;
  changeOrientation: () => void;
  isMute: boolean;
  toggleMute: () => void;
  onSeek: (seekedValue: number) => void;
  playbackRate: ISingleSelectOptions;
  handlePlayBackRateChange: (option: ISingleSelectOptions) => void;
  videoQuality: IVideoQualityProps;
  handleVideoQualityChange: (videoTrack: ISingleSelectOptions) => void;
  videoDuration: IVideoDurationProps;
  isVideoEnded: boolean;
  settingModalVisible: boolean;
  handleSettingModalVisibility: ({visible}: {visible: boolean}) => void;
  showController: boolean;
  onControllerOverlayPress: () => void;
  onSlidingStart: () => void;
  onSlidingComplete: (data: number) => void;
  isLoading: boolean;
  isBuffering: boolean;
  videoType?: string;
  isLiveLagging: boolean;
  onLiveRequest: () => void;
}

interface IPlayerViewReturnProps extends IVideoPlayerCtxProps {
  onBuffer: ({isBuffering}: IVideoBufferingProps) => void;
  onError: (error: LoadError) => void;
  seekValue: number;
  onSeekCb: (data: OnSeekData) => void;
  onLoad: (data: OnLoadData) => void;
  onLoadStart: () => void;
  onProgress: (data: OnProgressData) => void;
  onVideoEnd: () => void;
  onRetryPress: () => void;
  videoErrorDetails: IVideoErrorProps;
}

interface ISelectedSettingOptionProps {
  // Show sub setting screen
  show: boolean;
  // All supported setting options
  options: ISingleSelectOptions[];
  // Selected setting
  selectedOption: ISingleSelectOptions;
  // Callback for setting option change
  onChange: (selectedOption: ISingleSelectOptions) => void;
  // Label for sub setting screen
  placeHolder: string;
}

type VideoTrackType = 'auto' | 'disabled' | 'resolution' | 'index';

interface ISingleSelectOptions {
  // Unique key for each option
  key: string;
  // Option Label text
  label: string;
  // Option value
  value: number;
  // Type of option
  type?: VideoTrackType;
}

interface IStringObject {
  [key: string]: string;
}
