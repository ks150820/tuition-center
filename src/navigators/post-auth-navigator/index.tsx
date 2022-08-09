import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {postAuthParamList} from './@types/post-auth-param-list';
import BottomTabBar from '../bottom-tab-navigator';

const PostAuthStack = createStackNavigator<postAuthParamList>();
const PostAuthNavigator = () => {
  return (
    <PostAuthStack.Navigator>
      <PostAuthStack.Screen
        options={{headerShown: false}}
        name="BottomNavigator"
        component={BottomTabBar}
      />
    </PostAuthStack.Navigator>
  );
};

export default PostAuthNavigator;
