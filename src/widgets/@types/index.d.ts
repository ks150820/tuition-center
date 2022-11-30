type ReactNode = import('react').ReactNode;
type AnimatedValue = import('react-native').Animated.Value;
type ViewStyle = import('react-native').TextStyle;
type GestureResponderEvent = import('react-native').GestureResponderEvent;
type SliderProps = import('@rneui/base').SliderProps;

type SupportedLanguage = 'en' | 'hi';
type SupportedVideoLanguage = 'en' | 'hi';
type VideoQuality = 240 | 360 | 480 | 640 | 720 | 1080;
type PlaybackSpeed = 0.25 | 0.5 | 0.75 | 1 | 1.25 | 1.5 | 1.75 | 2;

interface IBackBtn {
  // Back icon color
  backIconColor?: string;
  // Back icon name
  backIconName?: string;
  // Back icon type
  backIconType?: string;
  // Back icon size
  size?: number;
  // Back press callback
  onBackPress?: () => void;
}

interface IHeaderWithBackButtonViewProps extends IBackBtn {
  // Label text
  label: string;
  // Color for label
  labelColor?: string;
}

interface IModalViewProps {
  // Animation while opening modal
  animationIn?: any;
  // Animation while closing modal
  animationOut?: any;
  // Background color for remained part of modal
  backdropColor?: string;
  // Background opacity for remained part of modal
  backdropOpacity?: number;
  // Child to render inside modal
  children: ReactNode;
  // Style for container view
  containerStyle?: ViewStyle;
  // Flag to show/hide modal
  isVisible: boolean;
  // Handler for device's back press event
  onBackButtonPress?: () => void;
  // Handler for remained part touch event
  onBackdropPress?: () => void;
  // TestId assignment
  testID?: string;
}

interface IPlayButtonViewProps {
  // Toggler for play button
  togglePlay: () => void;
  // Icon name
  iconName: string;
  // Icon type
  iconType: string;
  // Icon size
  iconSize: number;
  // Style for button container
  style?: ViewStyle;
}

interface IPlayButtonViewControllerProps {
  defaultValue: boolean;
  toggleCb: (newStateVal: boolean) => void;
}

interface ISingleSelectorViewProps {
  // Array of options
  options: ISingleSelectOptions[];
  // Default or previously selected option
  selectedOption: ISingleSelectOptions;
  // To modify styling
  style?: ViewStyle;
  // Placeholder text to display on top of list
  placeHolder?: string;
  // Id to map while Listing or Mapping items
  id?: string;
  // Will be triggered when user selects any option
  onChange: (selectedOption: ISingleSelectOptions) => void;
  // Callback for back press event
  onBackPress?: () => void;
}

interface ISingleSelectOptionViewProps {
  // Unique optionKey for each option
  option: ISingleSelectOptions;
  // Its indicate currently selected option
  isSelected: boolean;
  // Callback to listen tap on option
  onSelectOption: (selectedOption: ISingleSelectOptions) => void;
}

interface ISliderViewProps extends SliderProps {
  // To modify styling
  style?: ViewStyle;
  // Current video progress percentage
  currentProgress: number;
  // Callback to handle volume change on drag or tap on it
  onValueChange: (progress: number) => void;
  // Track color for active state
  activeTrackColor?: string;
}

interface ISettingOptionProps {
  // List of quality option
  options: ISingleSelectOptions[];
  // Selected quality value
  selectedOption: ISingleSelectOptions;
  // Callback for change of quality
  onChange: (selectedOption: ISingleSelectOptions) => void;
  // Setting sub screen label
  placeHolder: string;
  // Name for setting icon
  iconName: string;
  // Type of setting icon
  iconType: string;
}

interface ISettingOptionWrapperProps {
  // List of quality option
  options: ISingleSelectOptions[];
  // Selected quality value
  selectedOption: ISingleSelectOptions;
  // Callback for change of quality
  onChange: (selectedOption: ISingleSelectOptions) => void;
}

interface ISettingOptionWrapperViewProps {
  // Selected app language
  appLanguage: SupportedLanguage;
  // List of quality option
  options: ISingleSelectOptions[];
  // Selected quality value
  selectedOption: ISingleSelectOptions;
  // Callback for change of quality
  onChange: (selectedOption: ISingleSelectOptions) => void;
}

interface IUIBtnViewProps extends IUITextViewProps {
  btnText?: string | number;
  // Icon name
  iconName?: string;
  textStyle?: object;
  // Icon type
  iconType?: string;
  // Icon size
  iconSize?: number;
  // Icon color
  iconColor?: string;
  // Button click handler
  onPress?: (value?: any) => void;
  // Ripple color for touch event
  rippleColor?: string;
  // Style object
  styles?: {
    outerWrapper?: ViewStyle;
    btnElementWrapper?: ViewStyle;
    iconContainerStyle?: ViewStyle;
  };
  // TestId assignment
  testID?: string;
  disabled?: boolean;
}

// interface IUIFullScreenToggleButtonViewProps {
//   size: number;
//   color: string;
//   isFullScreen: boolean;
//   onPress: (event: UIEvent) => void;
// }

// interface IUiMoreOptionBtnViewProps {
//   onPress: (event: UIEvent) => void;
//   size: number;
//   color: string;
// }

interface IUIRowViewProps {
  // Children to render
  children: ReactNode;
  // Container styling
  style?: ViewStyle;
}

interface IVolumeToggleViewProps {
  // Toggler for mute/unmute
  toggleMute: () => void;
  // Icon name
  iconName: string;
}

interface IVolumeToggleProps {
  // Volume toggle button handler
  toggleCb: () => void;
  // Default value for initial state
  defaultValue: boolean;
  // Icon size
  iconSize?: number;
  // Styling for container view
  containerStyle?: ViewStyle;
}

interface IUIToggleButtonProps {
  // Handler for press event
  handleOnPress: () => void;
  // Icon name
  iconName: string;
  // Icon type
  iconType: string;
  // Icon color
  iconColor: string;
  // Icon size
  iconSize?: number;
  containerStyle?: ViewStyle;
  // TestId assignment
  testID?: string;
}

interface IPlayButtonProps {
  // Play toggle button handler
  toggleCb: () => void;
  // Default value for initial state
  defaultValue: boolean;
  // Icon size
  iconSize?: number;
  // Flag for video ended or not
  isVideoEnded: boolean;
  // Container styling
  style?: ViewStyle;
  // Icon color
  color?: string;
  // TestId assignment
  testID?: string;
}

interface IQualitySelectorModalProps {
  // Array of options
  options: ISingleSelectOptions[];
  // Default or previously selected option
  selectedOption: ISingleSelectOptions;
  // Will be triggered when user selects any option
  handleOnChange: (selectedOption: ISingleSelectOptions) => void;
}

interface IQualitySelectorModalViewProps {
  // Boolean for modal visibility
  isVisible: boolean;
  // Array of options
  options: ISingleSelectOptions[];
  // Default or previously selected option
  selectedOption: ISingleSelectOptions;
  // Will be triggered when user selects any option
  handleOnChange: (selectedOption: ISingleSelectOptions) => void;
  // Callback to hide modal
  onHideModal: () => void;
}

interface IVideoQualityProps {
  // List of all available qualities
  availableVideoQualities: ISingleSelectOptions[];
  // Selected quality
  selectedVideoTrack: ISingleSelectOptions;
}

interface IVideoTrack {
  // Type of video track
  type: string;
  // Labeled value
  label: string;
  // Actual value
  value: string | number;
  // Unique item key
  key: string;
}

interface IPlayerVideoTrack {
  // Bitrate value
  bitrate: number;
  // Codec value
  codecs: string;
  // Video width
  width: number;
  // Video height
  height: number;
  // Video track id
  trackId: string;
}

interface IUIFullScreenToggleButtonProps {
  // Default value for initial state
  defaultValue?: boolean;
  // Fullscreen toggler
  fullScreenToggleCb?: (value: boolean) => void;
  // Icon color
  color?: string;
  // Icon size
  iconSize?: number;
  // Styling for container
  containerStyle?: ViewStyle;
  // TestId assignment
  testID?: string;
}

interface IVideoDurationBinderProps {
  // Total video duration
  totalDuration: string;
  // Played video duration
  durationPlayed: string;
  // Video streaming type
  videoType?: string;
}

interface IVideoDurationViewProps {
  // Total video duration
  totalDuration: string;
  // Played video duration
  durationPlayed: string;
  // Video is live or not
  isLiveVideo: boolean;
  // Animated value to apply transformation to view
  animatedValue: AnimatedValue;
  // When user pause live video, It'll no more in live state,
  // So we will disable live indicator
  isLiveLagging: boolean;
  // Handler to toggle live lagging value
  onLiveRequest: () => void;
}
