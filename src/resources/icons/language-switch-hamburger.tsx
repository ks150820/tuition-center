import * as React from 'react';
import Svg, {SvgProps, Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const LanguageSwitchIcon = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" {...props}>
    <Circle cx={17.001} cy={17} r={17} fill="#FFF4F4" />
    <G clipPath="url(#a)">
      <Path
        d="m20.376 17.042 4.125 4.125-4.125 4.125-1.178-1.179L21.31 22 10.334 22v-1.667h10.977l-2.113-2.113 1.178-1.178Zm-6.75-8.334 1.178 1.179L12.691 12h10.977v1.667H12.69l2.113 2.113-1.178 1.178-4.125-4.125 4.125-4.125Z"
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

export default LanguageSwitchIcon;
