import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../screens/home-screen';
import MyCourse from '../../screens/my-course-screen';
import TestExperience from '@screens/test-screen';
import InstructionScreen from '@screens/instruction-screen';
import HelpFeedbackScreen from '@screens/help-feedback-screen';
import LiveClassChatScreen from '@screens/live-class-chat-screen';

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
        name="InstructionScreen"
        component={InstructionScreen}
        options={{headerShown: false}}
      />

      <homeNavigator.Screen
        name="TestExperience"
        component={TestExperience}
        options={{headerShown: false}}
      />
      <homeNavigator.Screen
        name="HelpFeedback"
        component={HelpFeedbackScreen}
      />
      <homeNavigator.Screen
        name={LiveClassChatScreen.name as keyof homeParamList}
        component={LiveClassChatScreen}
      />
    </homeNavigator.Navigator>
  );
};
export default HomeNavigator;
