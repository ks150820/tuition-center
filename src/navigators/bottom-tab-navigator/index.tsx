import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ProfileScreen from '../../screens/profile-screen';
import HomeNavigator from '../home-navigator';
import {bottomTabParamList} from './@types/bottom-tab-param-list';

const Tab = createBottomTabNavigator<bottomTabParamList>();

const BottomTabBarNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeNavigator"
        options={{headerShown: false}}
        component={HomeNavigator}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabBarNavigator;
