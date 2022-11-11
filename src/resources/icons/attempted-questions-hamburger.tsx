import * as React from 'react';
import Svg, {SvgProps, Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const AttemptedQuestionsIcon = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" {...props}>
    <Circle cx={17} cy={17} r={17} fill="#FFF4F4" />
    <G clipPath="url(#a)" fill="#000">
      <Path d="m26.215 9.812-4.009-4a.67.67 0 0 0-.473-.196H10.596a1.561 1.561 0 0 0-1.56 1.556v19.645a1.554 1.554 0 0 0 1.56 1.556h14.256a1.561 1.561 0 0 0 1.559-1.556V10.283a.666.666 0 0 0-.196-.472Zm-3.814-1.92 1.729 1.724H22.4V7.892Zm2.45 19.148H10.597a.222.222 0 0 1-.223-.223V7.172c0-.123.1-.222.223-.222h10.469v3.333a.666.666 0 0 0 .668.667h3.341v15.867a.222.222 0 0 1-.222.223Z" />
      <Path d="M23.07 12.372h-5.346a.669.669 0 0 0-.58 1c.12.206.34.334.58.334h5.346a.669.669 0 0 0 .578-1 .669.669 0 0 0-.578-.334ZM15.051 11.037h-2.673a.67.67 0 0 0-.668.667v2.667a.666.666 0 0 0 .668.666h2.673a.669.669 0 0 0 .668-.666v-2.667a.666.666 0 0 0-.668-.667Zm-.668 2.667h-1.337V12.37h1.337v1.334ZM23.07 17.704h-5.346a.669.669 0 0 0-.58 1c.12.206.34.334.58.334h5.346a.669.669 0 0 0 .578-1 .669.669 0 0 0-.578-.334ZM15.051 16.371h-2.673a.67.67 0 0 0-.668.667v2.667a.666.666 0 0 0 .668.666h2.673a.669.669 0 0 0 .668-.666v-2.667a.666.666 0 0 0-.668-.667Zm-.668 2.667h-1.337v-1.334h1.337v1.334ZM23.07 23.038h-5.346a.669.669 0 0 0-.58 1c.12.206.34.334.58.334h5.346a.669.669 0 0 0 .578-1 .669.669 0 0 0-.578-.334ZM15.051 21.705h-2.673a.669.669 0 0 0-.668.667v2.667a.666.666 0 0 0 .668.666h2.673a.67.67 0 0 0 .668-.666v-2.667a.666.666 0 0 0-.668-.667Zm-.668 2.667h-1.337v-1.334h1.337v1.334Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(9.455 5.625)"
          d="M0 0h16.546v22.75H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default AttemptedQuestionsIcon;
