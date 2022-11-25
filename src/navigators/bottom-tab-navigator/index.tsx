import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext, useState} from 'react';

import BottomTabItem from './components/bottom-tab-item';
import {styles} from './bottom-tab-styles';

import BottomTabHeaderView from '@navigators/bottom-tab-navigator/components/bottom-tab-navigation-header/bottom-tab-header-view';
import {bottomTabOptions} from './constant';

const BottomTab = createBottomTabNavigator<bottomTabParamList>();
const BottomTabBarNavigator = () => {
  return (
    <>
      <BottomTab.Navigator
        screenOptions={() => ({
          tabBarStyle: {
            height: 60,
          },
        })}>
        {bottomTabOptions.map(item => (
          //it will render screen by using list bottomTabOptions
          <BottomTab.Screen
            key={item.title}
            name={item.title as any}
            options={{
              headerTitle: () => <BottomTabHeaderView title={item.title} />,
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
    </>
  );
};

export default BottomTabBarNavigator;
