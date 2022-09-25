import {View, Text, Pressable} from 'react-native';
import React from 'react';
import useAuthScreenViewController from './auth-screen-view-controller';

const AuthScreenView = () => {
  const {callLoginApi} = useAuthScreenViewController();
  return (
    <View>
      <Pressable
        style={{padding: 24, backgroundColor: 'red'}}
        onPress={callLoginApi}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default AuthScreenView;
