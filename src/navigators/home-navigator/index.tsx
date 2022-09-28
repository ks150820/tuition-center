import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../screens/home-screen';
import MyCourse from '../../screens/my-course-screen';
import {homeParamList} from './@types/home-navigator-param-list';

const homeNavigator = createStackNavigator<homeParamList>();
const HomeNavigator = () => {
  return (
    <homeNavigator.Navigator>
      <homeNavigator.Screen
        options={{headerShown: true}}
        name="Home"
        component={HomeScreen}
      />
      <homeNavigator.Screen
        options={{headerShown: true}}
        name="MyCourse"
        component={MyCourse}
      />
    </homeNavigator.Navigator>
  );
};
export default HomeNavigator;
