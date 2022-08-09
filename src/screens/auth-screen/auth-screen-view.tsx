import {View, Text, Pressable} from 'react-native';
import React from 'react';
import useAuthScreenViewController from './auth-screen-view-controller';

const AuthScreenView = () => {
  const {onPress} = useAuthScreenViewController();
  return (
    <View>
      <Pressable
        style={{padding: 24, backgroundColor: 'red'}}
        onPress={onPress}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default AuthScreenView;
