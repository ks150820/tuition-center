import {View, Text} from 'react-native';
import React from 'react';

const NoInternetConnection = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 84,
      }}>
      <Text>No Internet connection</Text>
    </View>
  );
};

export default NoInternetConnection;
