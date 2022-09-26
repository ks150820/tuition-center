import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ProfileScreen from '../../screens/profile-screen';
import HomeNavigator from '../home-navigator';
import {bottomTabParamList} from './@types/bottom-tab-param-list';

const BottomTab = createBottomTabNavigator<bottomTabParamList>();

const BottomTabBarNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="HomeNavigator"
        options={{headerShown: false}}
        component={HomeNavigator}
      />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabBarNavigator;
