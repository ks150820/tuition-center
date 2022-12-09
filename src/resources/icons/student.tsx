import React from 'react';
import Svg, {Circle, Path, Rect, Defs, G, ClipPath} from 'react-native-svg';

const Student = () => {
  return (
    <Svg width="21" height="22" viewBox="0 0 21 22" fill="none">
      <Rect
        y="0.876953"
        width="20.2469"
        height="20.2469"
        rx="4.04938"
        fill="#BF1E2D"
      />
      <G clip-path="url(#clip0_5259_25709)">
        <Path
          d="M13.5464 16.4212V15.216C13.5464 14.5767 13.2924 13.9637 12.8404 13.5116C12.3884 13.0596 11.7753 12.8057 11.136 12.8057H6.91792C6.27865 12.8057 5.66557 13.0596 5.21354 13.5116C4.76151 13.9637 4.50757 14.5767 4.50757 15.216V16.4212"
          stroke="white"
          stroke-width="1.44621"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.02631 10.3969C10.3575 10.3969 11.4367 9.31772 11.4367 7.98652C11.4367 6.65532 10.3575 5.57617 9.02631 5.57617C7.69512 5.57617 6.61597 6.65532 6.61597 7.98652C6.61597 9.31772 7.69512 10.3969 9.02631 10.3969Z"
          stroke="white"
          stroke-width="1.44621"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M13.1365 10.3966L14.3416 11.6018L16.752 9.19141"
          stroke="white"
          stroke-width="1.44621"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5259_25709">
          <Rect
            width="14.4621"
            height="14.4621"
            fill="white"
            transform="translate(2.89233 3.76953)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Student;
