import * as React from 'react';
import Svg, {SvgProps, Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const PrivacyPolicyIcon = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" {...props}>
    <Circle cx={17.001} cy={17} r={17} fill="#FFF4F4" />
    <G clipPath="url(#a)">
      <Path
        d="M22.834 15.333h.834a.834.834 0 0 1 .833.833V24.5a.833.833 0 0 1-.833.833H10.334a.833.833 0 0 1-.833-.833v-8.334a.833.833 0 0 1 .833-.833h.834V14.5a5.832 5.832 0 1 1 11.666 0v.833ZM11.168 17v6.666h11.666V17H11.168Zm5 1.666h1.666V22h-1.666v-3.334Zm5-3.333V14.5a4.167 4.167 0 1 0-8.334 0v.833h8.334Z"
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

export default PrivacyPolicyIcon;
