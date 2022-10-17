import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';
const FreeVideosScreenView = () => {
  var radius = 60;
  var angle = 270;
  var x = radius * Math.sin((Math.PI * 2 * angle) / 360);
  var y = radius * Math.cos((Math.PI * 2 * angle) / 360);
  console.log(x, y);
  const circumference = 2 * Math.PI * 60;
  const halfCircle = radius + 12;
  console.log(circumference);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            r={60}
            stroke="pink"
            strokeWidth={12}
            strokeLinecap="round"
            strokeDashoffset={circumference + (20 * circumference) / 100}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={60}
            stroke="red"
            strokeWidth={12}
            strokeLinecap="round"
            strokeDashoffset={circumference - (80 * circumference) / 100}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
    </View>
  );
};

export default FreeVideosScreenView;
