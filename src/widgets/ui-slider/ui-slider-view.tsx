import React from 'react';
import {Slider, SliderProps} from '@rneui/themed';
import COLORS from '../../themes/colors';
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
  maximumTrackTintColor = COLORS.grey_light,
  minimumTrackTintColor = COLORS.primary,
  trackStyle = styles.track,
  thumbTintColor = COLORS.white,
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
