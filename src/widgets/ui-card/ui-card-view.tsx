import React, {ReactElement} from 'react';
import {View} from 'react-native';

import {styles} from './ui-card-styles';

interface IUICardViewProps {
  style?: object;
  children: JSX.Element;
}

const UICardView = ({style, children}: IUICardViewProps): ReactElement => {
  return <View style={[styles.component, style]}>{children}</View>;
};

export default UICardView;
