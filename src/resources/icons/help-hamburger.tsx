import * as React from 'react';
import Svg, {SvgProps, Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const HelpIcon = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" {...props}>
    <Circle cx={17.001} cy={17} r={17} fill="#FFF4F4" />
    <G clipPath="url(#a)">
      <Path
        d="M23.616 13.667h.885a1.666 1.666 0 0 1 1.667 1.667v3.333a1.666 1.666 0 0 1-1.667 1.667h-.885a6.667 6.667 0 0 1-6.615 5.833V24.5a5 5 0 0 0 5-5v-5a5 5 0 0 0-10 0v5.834h-2.5a1.667 1.667 0 0 1-1.667-1.667v-3.333a1.666 1.666 0 0 1 1.667-1.667h.885a6.668 6.668 0 0 1 13.23 0ZM9.501 15.334v3.333h.833v-3.333h-.833Zm14.167 0v3.333h.833v-3.333h-.833Zm-10.2 4.82.883-1.413c.794.498 1.713.76 2.65.76a4.976 4.976 0 0 0 2.65-.76l.883 1.413a6.636 6.636 0 0 1-3.533 1.013 6.635 6.635 0 0 1-3.533-1.013Z"
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

export default HelpIcon;
