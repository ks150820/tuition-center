import * as React from "react"
import Svg, {
  SvgProps,
  Circle,
  G,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg"

const PersonalDetailsIcon = (props: SvgProps) => (
  <Svg
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Circle cx={17.001} cy={17} r={17} fill="#FFF4F4" />
    <G clipPath="url(#a)">
      <Path
        d="M18.667 18.876v1.742A5 5 0 0 0 12 25.333h-1.667a6.666 6.666 0 0 1 8.334-6.457ZM17 17.833c-2.762 0-5-2.237-5-5s2.238-5 5-5 5 2.237 5 5c0 2.762-2.238 5-5 5Zm0-1.667A3.332 3.332 0 1 0 17 9.5a3.332 3.332 0 1 0 0 6.667Zm4.828 7.429 2.945-2.946 1.18 1.178-4.125 4.125-2.947-2.947 1.179-1.178 1.767 1.768Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(7 7)" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default PersonalDetailsIcon
