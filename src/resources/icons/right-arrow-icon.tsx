import React from 'react';
import Svg, {SvgProps, Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

interface IRightArrowProps {
  color: string;
  height: number;
  width: number;
}

const RightArrowIcon = ({color, height, width}: IRightArrowProps) => {
  return (
    <Svg
      width={height}
      height={width}
      viewBox="0 0 17 17"
      fill="none">
      <Path
        d="M12.7589 7.69011L7.39491 2.32611L8.80891 0.912109L16.5869 8.69011L8.80891 16.4681L7.39491 15.0541L12.7589 9.69011H0.586914V7.69011H12.7589Z"
        fill={color}
      />
    </Svg>
  );
};

export default RightArrowIcon;
