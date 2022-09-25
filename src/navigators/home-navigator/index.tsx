import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Homescreen from '../../screens/home-screen';
import MyCourse from '../../screens/my-course-screen';
import {homeParamList} from './@types/home-navigator-param-list';

const homeNavigator = createStackNavigator<homeParamList>();
const HomeNavigator = () => {
  return (
    <homeNavigator.Navigator>
      <homeNavigator.Screen
        options={{headerShown: true}}
        name={Homescreen.displayName as keyof homeParamList}
        component={Homescreen}
      />
      <homeNavigator.Screen
        options={{headerShown: true}}
        name={MyCourse.displayName as keyof homeParamList}
        component={MyCourse}
      />
    </homeNavigator.Navigator>
  );
};
export default HomeNavigator;
