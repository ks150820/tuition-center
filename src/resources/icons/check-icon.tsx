import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckIcon = ({color, height, width}: ICommonIconProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 6 10"
    fill="none">
    <Path
      d="M1 1L5 5L1 9"
      stroke={color}
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default CheckIcon;
