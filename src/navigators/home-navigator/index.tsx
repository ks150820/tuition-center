import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../screens/home-screen';
import MyCourse from '../../screens/my-course-screen';
import TestExperience from '@screens/test-screen';
import InstructionScreen from '@screens/instruction-screen';
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
      <homeNavigator.Screen
        name={InstructionScreen.name as keyof homeParamList}
        component={InstructionScreen}
        options={{headerShown: false}}
      />

      <homeNavigator.Screen
        name={TestExperience.name as keyof homeParamList}
        component={TestExperience}
        options={{headerShown: false}}
      />
    </homeNavigator.Navigator>
  );
};
export default HomeNavigator;
