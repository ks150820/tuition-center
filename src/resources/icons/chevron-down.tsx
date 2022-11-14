import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ChevronDownIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="m12.001 13.172 4.95-4.95 1.414 1.414L12.001 16 5.637 9.636l1.414-1.414 4.95 4.95Z"
      fill="#000"
    />
  </Svg>
)

export default ChevronDownIcon
