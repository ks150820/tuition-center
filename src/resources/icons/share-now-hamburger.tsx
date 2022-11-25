import * as React from 'react';
import Svg, {SvgProps, Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const ShareNowIcon = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" {...props}>
    <Circle cx={17.001} cy={17} r={17} fill="#FFF4F4" />
    <G clipPath="url(#a)">
      <Path
        d="m17.934 21.186-3.499-1.909A3.335 3.335 0 0 1 8.667 17a3.333 3.333 0 0 1 5.768-2.277l3.5-1.908a3.333 3.333 0 1 1 .8 1.462l-3.5 1.909a3.338 3.338 0 0 1 0 1.628l3.498 1.908a3.333 3.333 0 1 1-.799 1.463Zm-5.933-2.52a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Zm9.167-5a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Zm0 10a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
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

export default ShareNowIcon;
