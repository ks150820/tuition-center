import {View, Text} from 'react-native';
import React from 'react';

const UICard = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: ViewStyle;
}) => {
  return (
    <View
      style={[
        {
          borderRadius: 8,
          borderColor: '#E0DACB',
          borderWidth: 0.3,
          backgroundColor: '#ffffff',
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default UICard;
