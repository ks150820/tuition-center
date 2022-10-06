import React from 'react';
import {ImageSourcePropType} from 'react-native';

import StatusComponentView from './status-component-view';

interface IStatusProps {
  children: string;
  ComponentStyle?: Object;
  backgroundImage: ImageSourcePropType;
  childrenStyle?: Object;
}

/**
 * this component is use to display the test questions status
 * @param children children component, it can be anything
 * @param childrenStyle css style given to component
 * @returns
 */
const StatusComponent = ({
  children,
  ComponentStyle,
  backgroundImage,
  childrenStyle,
}: IStatusProps) => {
  return (
    <StatusComponentView
      children={children}
      ComponentStyle={ComponentStyle}
      backgroundImage={backgroundImage}
      childrenStyle={childrenStyle}
    />
  );
};

export default StatusComponent;
