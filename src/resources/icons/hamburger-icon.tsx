import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const HamburgerIcon = (props: SvgProps) => (
  <Svg width={16} height={14} fill="none" {...props}>
    <Path
      d="M14.95 0H.25A.15.15 0 0 0 .1.15v1.2c0 .083.068.15.15.15h14.7a.15.15 0 0 0 .15-.15V.15a.15.15 0 0 0-.15-.15Zm0 11.7H.25a.15.15 0 0 0-.15.15v1.2c0 .082.068.15.15.15h14.7a.15.15 0 0 0 .15-.15v-1.2a.15.15 0 0 0-.15-.15Zm-8-5.85H.25A.15.15 0 0 0 .1 6v1.2c0 .082.068.15.15.15h6.7a.15.15 0 0 0 .15-.15V6a.15.15 0 0 0-.15-.15Z"
      fill="#333"
    />
  </Svg>
);

export default HamburgerIcon;
