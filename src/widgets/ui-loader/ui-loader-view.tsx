import React from 'react';
import {ActivityIndicator} from 'react-native';

import {COLORS} from '@resources/colors';

const UILoaderView: React.FC<IUILoaderProps> = ({
  color = COLORS.BLACK,
  size = 'small',
  style = {},
}) => {
  return <ActivityIndicator color={color} size={size} style={style} />;
};

export default UILoaderView;
