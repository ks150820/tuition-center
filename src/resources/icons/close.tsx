import React from 'react';
import {Svg, ClipPath, G, Path, Defs, Rect} from 'react-native-svg';
const CloseIcon = ({height, width, color}: ICommonIconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <G clip-path="url(#clip0_1527_8053)">
      <Path
        d="M17.2518 6.80147C16.9268 6.47827 16.4018 6.47827 16.0768 6.80147L12.0018 10.8457L7.92681 6.79318C7.60181 6.46998 7.07681 6.46998 6.75181 6.79318C6.42681 7.11639 6.42681 7.63849 6.75181 7.96169L10.8268 12.0142L6.75181 16.0667C6.42681 16.3899 6.42681 16.912 6.75181 17.2352C7.07681 17.5584 7.60181 17.5584 7.92681 17.2352L12.0018 13.1827L16.0768 17.2352C16.4018 17.5584 16.9268 17.5584 17.2518 17.2352C17.5768 16.912 17.5768 16.3899 17.2518 16.0667L13.1768 12.0142L17.2518 7.96169C17.5685 7.64678 17.5685 7.11639 17.2518 6.80147Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1527_8053">
        <Rect
          width="20"
          height="19.8895"
          fill="white"
          transform="translate(1.99976 2.07031)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CloseIcon;
