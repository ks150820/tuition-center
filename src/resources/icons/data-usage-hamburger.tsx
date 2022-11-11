import * as React from 'react';
import Svg, {SvgProps, Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const DataUsage = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" {...props}>
    <Circle cx={17.001} cy={17} r={17} fill="#FFF4F4" />
    <G clipPath="url(#a)">
      <Path
        d="M11.168 9.5v13.333H24.5V24.5h-15v-15h1.667Zm12.744 2.744 1.178 1.178-4.756 4.756-2.5-2.499-3.577 3.577-1.178-1.178 4.755-4.756 2.5 2.499 3.578-3.577Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(7.001 7)" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default DataUsage;
