import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const CallNowIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G
      clipPath="url(#a)"
      stroke="#2665EE"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M19.167 5.833v-5h-5M13.333 6.667 19.167.833M18.333 14.1v2.5a1.666 1.666 0 0 1-1.816 1.667 16.492 16.492 0 0 1-7.192-2.559 16.251 16.251 0 0 1-5-5 16.492 16.492 0 0 1-2.558-7.225 1.667 1.667 0 0 1 1.658-1.816h2.5A1.667 1.667 0 0 1 7.592 3.1c.105.8.3 1.586.583 2.342A1.667 1.667 0 0 1 7.8 7.2L6.742 8.258a13.334 13.334 0 0 0 5 5L12.8 12.2a1.667 1.667 0 0 1 1.758-.375c.756.282 1.542.478 2.342.583a1.667 1.667 0 0 1 1.433 1.692Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CallNowIcon;
