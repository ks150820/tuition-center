import * as React from 'react';
import Svg, {SvgProps, Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const RateUsIcon = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" {...props}>
    <Circle cx={17.001} cy={17} r={17} fill="#FFF4F4" />
    <G clipPath="url(#a)">
      <Path
        d="M17.001 18.667v1.666a5 5 0 0 0-5 5h-1.667a6.666 6.666 0 0 1 6.667-6.666Zm0-.834c-2.763 0-5-2.237-5-5 0-2.762 2.238-5 5-5s5 2.238 5 5c0 2.763-2.238 5-5 5Zm0-1.666a3.332 3.332 0 1 0 0-6.667 3.332 3.332 0 1 0 0 6.667Zm5 8.75-2.45 1.287.468-2.726-1.98-1.932 2.738-.398L22 18.667l1.225 2.48 2.738.399-1.981 1.932.466 2.726-2.448-1.287Z"
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

export default RateUsIcon;
