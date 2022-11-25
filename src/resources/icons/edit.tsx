import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const EditIcon = (props: SvgProps) => (
  <Svg width={12} height={12} fill="#282727" {...props}>
    <Path
      d="m8.485 4.553-.942-.884-6.21 5.822v.883h.943l6.21-5.82Zm.943-.884.943-.883-.943-.884-.943.884.943.883Zm-6.6 7.955H0V8.972L8.957.576a.69.69 0 0 1 .471-.183.69.69 0 0 1 .471.183l1.886 1.768a.606.606 0 0 1 .195.442c0 .165-.07.324-.195.441L2.83 11.624h-.001Z"
      fill="#282727"
    />
  </Svg>
);

export default EditIcon;
