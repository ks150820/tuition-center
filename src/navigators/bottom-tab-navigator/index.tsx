import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeNavigator from '../home-navigator';
import CoursesScreen from '@screens/courses-screen';
import FreeVideosScreen from '@screens/free-videos-screen';
import StudyMaterial from '@screens/study-material-screen';
import BottomTabItem from './components/bottom-tab-item';
import {styles} from './bottom-tab-styles';
import {
  ACTIVE_HOME_ICON,
  INACTIVE_HOME_ICON,
  ACTIVE_MY_COURSE_ICON,
  IN_ACTIVE_MY_COURSE_ICON,
  ACTIVE_VIDEOS,
  IN_ACTIVE_VIDEOS,
  ACTIVE_BOOKS,
  IN_ACTIVE_BOOKS,
} from '@assets/icons/svg-icons';

const BottomTab = createBottomTabNavigator<bottomTabParamList>();

const BottomTabBarNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          height: 60,
        },
      })}>
      <BottomTab.Screen
        name="HomeNavigator"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <BottomTabItem
                componentStyle={
                  focused ? styles.labelFocusedContainer : styles.labelContainer
                }
                icon={focused ? ACTIVE_HOME_ICON : INACTIVE_HOME_ICON}
                height={24}
                width={24}
                iconStyle={styles.iconStyle}
                textStyle={[
                  focused ? styles.MyCourseLabel : styles.MyCourseInActiveLabel,
                  styles.commonMyCourseLabel,
                ]}
                tabTitle="Home"
              />
            );
          },
        }}
        component={HomeNavigator}
      />
      <BottomTab.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <BottomTabItem
                componentStyle={
                  focused ? styles.labelFocusedContainer : styles.labelContainer
                }
                icon={
                  focused ? ACTIVE_MY_COURSE_ICON : IN_ACTIVE_MY_COURSE_ICON
                }
                height={24}
                width={24}
                iconStyle={styles.iconStyle}
                textStyle={[
                  focused ? styles.MyCourseLabel : styles.MyCourseInActiveLabel,
                  styles.commonMyCourseLabel,
                ]}
                tabTitle="My Course"
              />
            );
          },
          tabBarItemStyle: {
            width: 100,
            flex: 1,
          },
        }}
      />
      <BottomTab.Screen
        name="FreeVideo"
        component={FreeVideosScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <BottomTabItem
                componentStyle={
                  focused ? styles.labelFocusedContainer : styles.labelContainer
                }
                icon={focused ? ACTIVE_VIDEOS : IN_ACTIVE_VIDEOS}
                height={24}
                width={24}
                iconStyle={styles.iconStyle}
                textStyle={[
                  focused ? styles.MyCourseLabel : styles.MyCourseInActiveLabel,
                  styles.commonMyCourseLabel,
                ]}
                tabTitle="Free Video"
              />
            );
          },
          tabBarItemStyle: {
            width: 100,
            flex: 1,
          },
        }}
      />
      <BottomTab.Screen
        name="StudyMaterial"
        component={StudyMaterial}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <BottomTabItem
                componentStyle={
                  focused ? styles.labelFocusedContainer : styles.labelContainer
                }
                icon={focused ? ACTIVE_BOOKS : IN_ACTIVE_BOOKS}
                height={24}
                width={24}
                iconStyle={styles.iconStyle}
                textStyle={[
                  focused ? styles.MyCourseLabel : styles.MyCourseInActiveLabel,
                  styles.commonMyCourseLabel,
                ]}
                tabTitle="Study Material"
              />
            );
          },
          tabBarItemStyle: {
            width: 100,
            flex: 1,
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabBarNavigator;
