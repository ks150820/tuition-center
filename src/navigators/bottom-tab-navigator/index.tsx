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
import BottomTabHeaderView from '@navigators/bottom-tab-navigator/components/bottom-tab-navigation-header/bottom-tab-header-view';
import ProfileScreenView from '@screens/profile-screen/profile-screen-view-controller';

const BottomTab = createBottomTabNavigator<bottomTabParamList>();
const bottomTabOption = [
  {
    title: 'Home',
    icon: {
      active: ACTIVE_HOME_ICON,
      inActive: INACTIVE_HOME_ICON,
    },
    component: HomeNavigator,
  },
  {
    title: 'Courses',
    icon: {
      active: ACTIVE_MY_COURSE_ICON,
      inActive: IN_ACTIVE_MY_COURSE_ICON,
    },
    component: CoursesScreen,
  },
  {
    title: 'FreeVideo',
    icon: {
      active: ACTIVE_VIDEOS,
      inActive: IN_ACTIVE_VIDEOS,
    },
    component: FreeVideosScreen,
  },
  {
    title: 'StudyMaterial',
    icon: {
      active: ACTIVE_VIDEOS,
      inActive: IN_ACTIVE_VIDEOS,
    },
    component: ProfileScreenView,
  },
];

const BottomTabBarNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          height: 60,
        },
      })}>
      {bottomTabOption.map(item => (
        <BottomTab.Screen
          name={item.title as any}
          options={{
            headerTitle: props => <BottomTabHeaderView title={item.title} />,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return (
                <BottomTabItem
                  componentStyle={
                    focused
                      ? styles.labelFocusedContainer
                      : styles.labelContainer
                  }
                  icon={focused ? item.icon.active : item.icon.inActive}
                  height={24}
                  width={24}
                  iconStyle={styles.iconStyle}
                  textStyle={[
                    focused
                      ? styles.MyCourseLabel
                      : styles.MyCourseInActiveLabel,
                    styles.commonMyCourseLabel,
                  ]}
                  tabTitle={item.title}
                />
              );
            },
          }}
          component={item.component}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default BottomTabBarNavigator;
