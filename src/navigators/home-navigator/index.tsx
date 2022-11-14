import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../screens/home-screen';

const homeNavigator = createStackNavigator<homeParamList>();
const HomeNavigator = () => {
  return (
    <homeNavigator.Navigator>
      <homeNavigator.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
    </homeNavigator.Navigator>
  );
};
export default HomeNavigator;
