import React from 'react';
import {Svg, ClipPath, G, Path, Defs, Rect} from 'react-native-svg';

const ShootingStar = () => {
  return (
    <Svg width="15" height="14" viewBox="0 0 15 14" fill="none">
      <Path
        d="M2.03125 6.78125L5.11563 9.03438L3.60625 13.5625L7.52187 10.7625L11.4594 13.5625L12.9688 0.4375L2.03125 6.78125Z"
        fill="#BF1E2D"
      />
      <Path
        d="M9.00938 8.72813L11.3937 7.02187H8.44062L7.52187 4.26562L6.625 7.02187H3.67188L6.05625 8.72813L5.15937 11.4844L7.52187 9.77813L9.90625 11.4844L9.00938 8.72813Z"
        fill="white"
      />
      <Path
        d="M9.03086 6.2125H9.79648L12.9684 0.4375L8.76836 5.40313L9.03086 6.2125ZM12.9684 0.4375L8.06836 3.28125L8.46211 4.50625L12.9684 0.4375ZM12.2902 6.2125L12.9684 0.4375L10.8246 6.2125H12.2902Z"
        fill="#BF1E2D"
      />
    </Svg>
  );
};

export default ShootingStar;
