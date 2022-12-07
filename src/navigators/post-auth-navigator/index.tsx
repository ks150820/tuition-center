import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabBar from '../bottom-tab-navigator';
import ProfileScreenView from '@screens/profile-screen/profile-screen-view';
import VideoDetailsScreen from '@screens/video-detials-screen';

const PostAuthStack = createStackNavigator<postAuthParamList>();
const PostAuthNavigator = () => {
  return (
    <PostAuthStack.Navigator>
      <PostAuthStack.Screen
        options={{headerShown: false}}
        name="BottomNavigator"
        component={BottomTabBar}
      />
      <PostAuthStack.Screen
        options={{headerShown: true}}
        name="ProfileScreen"
        component={ProfileScreenView}
      />
      <PostAuthStack.Screen
        name="VideoDetail"
        component={VideoDetailsScreen}
        options={{
          headerTitle: 'Details'
        }}
      />
    </PostAuthStack.Navigator>
  );
};

export default PostAuthNavigator;
