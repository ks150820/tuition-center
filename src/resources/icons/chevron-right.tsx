import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ChevronDownLeft = (props: SvgProps) => (
  <Svg width={6} height={10} fill="none" {...props}>
    <Path
      d="M6 5 1.759 9.243.344 7.828 3.173 5 .343 2.172 1.759.757 6 5Z"
      fill="#1E1C1C"
    />
  </Svg>
);

export default ChevronDownLeft;
