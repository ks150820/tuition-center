import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  G,
  Path,
  Defs,
  ClipPath,
  SvgFromXml,
} from 'react-native-svg';

const AppTutorialIcon = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" {...props}>
    <Circle cx={17.001} cy={17} r={17} fill="#FFF4F4" />
    <G clipPath="url(#a)">
      <Path
        d="M17.001 25.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 1 1 0 16.666Zm0-1.666a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334Zm-1.148-9.655 4.066 2.71a.332.332 0 0 1 0 .555l-4.067 2.71a.335.335 0 0 1-.518-.276v-5.422a.334.334 0 0 1 .519-.277Z"
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

export default AppTutorialIcon;
