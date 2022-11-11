import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../../screens/auth-screen';

const PreAuthStack = createStackNavigator<preAuthParamList>();
const PreAuthNavigator = () => {
  return (
    <PreAuthStack.Navigator initialRouteName="login">
      <PreAuthStack.Screen name="login" component={AuthScreen} />
    </PreAuthStack.Navigator>
  );
};

export default PreAuthNavigator;
