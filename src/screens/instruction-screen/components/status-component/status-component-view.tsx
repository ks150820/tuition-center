import React from 'react';
import {View, Image, Text, ImageSourcePropType} from 'react-native';
import {styles as statusStyles} from './status-component-style';
interface IStatusProps {
  children: string;
  ComponentStyle?: Object;
  backgroundImage: ImageSourcePropType;
  childrenStyle?: object;
}

/**
 * this component is use to display the test questions status
 * @param {string} params.children children component, it can be anything
 * @param {object} params.childrenStyle css style given to component
 * @param {ImageSourcePropType} params.backgroundImage background image for component
 * @param {Object} params.ComponentStyle to give the style to outer component
 * @returns
 */
const StatusComponentView: React.FunctionComponent<IStatusProps> = ({
  children,
  ComponentStyle,
  backgroundImage,
  childrenStyle,
}) => {
  return (
    <View style={[statusStyles.statusContainer, ComponentStyle]}>
      <Image
        resizeMode="contain"
        style={statusStyles.bgImage}
        source={backgroundImage}
      />
      <Text style={childrenStyle}>{children}</Text>
    </View>
  );
};

export default StatusComponentView;
