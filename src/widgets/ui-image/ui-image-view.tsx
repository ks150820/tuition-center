import React from 'react';
import {View, Image, ImageSourcePropType} from 'react-native';

import {styles} from './ui-image-style';

interface IUIImageViewProps {
  url: ImageSourcePropType;
  style: object;
}

const UIImageView = ({url, style}: IUIImageViewProps) => {
  return (
    <View style={[styles.component, style]}>
      <Image source={url} style={styles.imageStyle} resizeMode="cover" />
    </View>
  );
};

export default UIImageView;
