import React from 'react';
import {SliderProps} from '@rneui/themed';
import {ViewStyle} from 'react-native';
import SliderView from './ui-slider-view';

interface ISliderProps extends SliderProps {
  // To modify styling
  style?: ViewStyle;
  // Current video progress percentage
  currentProgress: number;
  // Callback to handle volume change on drag or tap on it
  onValueChange?: (progress: number) => void;
}

/**
 * Slider widget
 * @param {ISliderProps} props
 * @returns
 */
const Slider: React.FunctionComponent<ISliderProps> = props => {
  return <SliderView {...props} />;
};

export default Slider;
