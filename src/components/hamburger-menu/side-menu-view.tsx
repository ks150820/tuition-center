import {View, Text} from 'react-native';
import React, {Children} from 'react';
import UIRow from '@widgets/ui-row';
import Profile from '@assets/icons/profile';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';

const menuList = [
  {
    title: 'Profile',
    icon: () => <Profile />,
    children: {
      child1: {
        title: 'My Purchases',
        icon: () => <Profile />,
      },
      child2: {
        title: 'Personal Details',
        icon: () => <Profile />,
      },
    },
    extraLabelView: null,
  },
  {
    title: 'App tutorial',
    icon: () => <Profile />,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Language',
    icon: () => <Profile />,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Saved Questions',
    icon: () => <Profile />,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Attempted Questions',
    icon: () => <Profile />,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Help',
    icon: () => <Profile />,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Privacy policy',
    icon: () => <Profile />,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Share now',
    icon: () => <Profile />,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Rate us',
    icon: () => <Profile />,
    children: {},
    extraLabelView: null,
  },
];

const SideMenuLabel = ({label}: {label: string}) => {
  return <UIText FontType={FONT_TYPE.OTHERS}>{label}</UIText>;
};
const SideMenuItem = ({label}: {label: string}) => {
  return (
    <UIRow style={{marginTop: 14}}>
      <Profile />
      <SideMenuLabel label={String(label)} />
    </UIRow>
  );
};

const renderOptions = () => {
  return menuList.map(data => {
    
    return <SideMenuItem key={data.title} label={data.title} />;
  });
};

const SideMenuView = () => {
  return <View>{renderOptions()}</View>;
};

export default SideMenuView;
