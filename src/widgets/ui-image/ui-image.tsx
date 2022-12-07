import React from 'react';
import {ImageSourcePropType} from 'react-native';

import UIImageView from './ui-image-view';

interface IUIImageProps {
  url: ImageSourcePropType;
  style: object;
}

const UIImage = ({url, style = {width: 100, height: 100}}: IUIImageProps) => {
  return <UIImageView url={url} style={style} />;
};

export default UIImage;
