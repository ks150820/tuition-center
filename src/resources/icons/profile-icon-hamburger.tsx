import * as React from 'react';
import Svg, {SvgProps, Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const ProfileIcon = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" {...props}>
    <Circle cx={17.001} cy={17} r={17} fill="#FFF4F4" />
    <G clipPath="url(#a)">
      <Path
        d="M10.334 25.333a6.667 6.667 0 0 1 13.334 0H22a5 5 0 0 0-10 0h-1.667Zm6.667-7.5c-2.763 0-5-2.237-5-5 0-2.762 2.237-5 5-5 2.762 0 5 2.238 5 5 0 2.763-2.238 5-5 5Zm0-1.666a3.332 3.332 0 0 0 3.333-3.334 3.332 3.332 0 1 0-6.666 0A3.332 3.332 0 0 0 17 16.167Z"
        fill="#2F2F2F"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(7.001 7)" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ProfileIcon;
