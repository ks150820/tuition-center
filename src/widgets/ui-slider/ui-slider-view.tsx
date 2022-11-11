import React from 'react';
import {Slider, SliderProps} from '@rneui/themed';
import {COLORS} from '@resources/colors';
import {styles} from './resources/styles';

/**
 * View for Slider
 * @param {ISliderViewProps} props
 * @returns
 */
interface ISliderViewProps extends SliderProps {
  // To modify styling
  style?: ViewStyle;
  // Current video progress percentage
  currentProgress: number;
  // Callback to handle volume change on drag or tap on it
  onValueChange?: (progress: number) => void;
  // Track color for active state
  activeTrackColor?: string;
}

const MAX_SLIDE = 100;
const MIN_SLIDE = 0;
const STEP_VALUE = 1;

const SliderView: React.FunctionComponent<ISliderViewProps> = ({
  style,
  currentProgress,
  onValueChange,
  maximumTrackTintColor = COLORS.GREY.bright_gray,
  minimumTrackTintColor = COLORS.PRIMARY,
  trackStyle = styles.track,
  thumbTintColor = COLORS.WHITE.white,
  thumbStyle = styles.thumb,
  ...rest
}) => {
  return (
    <Slider
      maximumValue={MAX_SLIDE}
      minimumValue={MIN_SLIDE}
      maximumTrackTintColor={maximumTrackTintColor}
      minimumTrackTintColor={minimumTrackTintColor}
      onValueChange={onValueChange}
      step={STEP_VALUE}
      style={style}
      trackStyle={trackStyle}
      thumbTintColor={thumbTintColor}
      thumbStyle={thumbStyle}
      value={currentProgress}
      {...rest}
    />
  );
};

export default SliderView;
