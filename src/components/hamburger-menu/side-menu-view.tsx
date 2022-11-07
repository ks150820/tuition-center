import {Pressable, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import UIRow from '@widgets/ui-row';
import Profile from '@assets/icons/profile';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import styles from './style';
import Animated, {FadeInDown} from 'react-native-reanimated';
import AppTutorialIcon from '@resources/icons/app-tutorial-hamburger';
import LanguageSwitchIcon from '@resources/icons/language-switch-hamburger';
import ProfileIcon from '@resources/icons/profile-icon-hamburger';
import AttemptedQuestionsIcon from '@resources/icons/attempted-questions-hamburger';
import HelpIcon from '@resources/icons/help-hamburger';
import PrivacyPolicyIcon from '@resources/icons/privacy-policy-hamburger';
import ShareNowIcon from './share-now-hamburger';
import RateUsIcon from '@resources/icons/rate-us-hamburger';

const menuList = [
  {
    title: 'Profile',
    Icon: ProfileIcon,
    children: {
      child1: {
        title: 'My Purchases',
        Icon: Profile,
      },
      child2: {
        title: 'Personal Details',
        Icon: Profile,
      },
    },
    extraLabelView: null,
  },
  {
    title: 'App tutorial',
    Icon: AppTutorialIcon,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Language',
    Icon: LanguageSwitchIcon,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Saved Questions',
    Icon: Profile,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Attempted Questions',
    Icon: AttemptedQuestionsIcon,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Help',
    Icon: HelpIcon,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Privacy policy',
    Icon: PrivacyPolicyIcon,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Share now',
    Icon: ShareNowIcon,
    children: {},
    extraLabelView: null,
  },
  {
    title: 'Rate us',
    Icon: RateUsIcon,
    children: {},
    extraLabelView: null,
  },
];
const CreateChildForExpandable = ({childrenObject}: {childrenObject: any}) => {
  let list = [];
  let index = 0;
  for (const child in childrenObject) {
    index = index + 1;
    list.push(
      <View
        key={childrenObject[child].title}
        style={index !== Object.keys(childrenObject).length && styles.border}>
        <SideMenuItem
          Icon={childrenObject[child].Icon}
          label={childrenObject[child].title}
        />
      </View>,
    );
  }
  return <View style={styles.expandableViewChildContainer}>{list}</View>;
};
const CreateExpandableView = ({
  title,
  object,
  setIsExpand,
  isExpand,
  Icon,
}: {
  title: string;
  object: any;
  setIsExpand: any;
  isExpand: boolean;
  Icon?: any;
}) => {
  console.log(object);
  return (
    <View style={[styles.expandableViewContainer, isExpand && styles.border]}>
      <Pressable
        onPress={() => {
          setIsExpand(!isExpand);
        }}>
        <UIRow
          style={[
            styles.expandableViewHeaderContainer,
            {paddingHorizontal: 16},
          ]}>
          <SideMenuItem Icon={Icon} label={title} />
          <View style={{height: 12, width: 12, backgroundColor: 'green'}} />
        </UIRow>
      </Pressable>

      <View>
        {isExpand && (
          <Animated.View entering={FadeInDown.duration(800)}>
            <CreateChildForExpandable childrenObject={object} />
          </Animated.View>
        )}
      </View>
    </View>
  );
};
const SideMenuLabel = ({label}: {label: string}) => {
  return (
    <UIText style={styles.slideMenuLabel} FontType={FONT_TYPE.HAMBURGER}>
      {label}
    </UIText>
  );
};
const SideMenuItem = ({label, Icon}: {label: string; Icon?: any}) => {
  console.log('Icon', Icon);

  return (
    <Pressable onPress={() => {}}>
      <UIRow style={styles.slideMenuItemContainer}>
        {Icon ? <Icon /> : null}
        <SideMenuLabel label={String(label)} />
      </UIRow>
    </Pressable>
  );
};

const SideMenuView = () => {
  const [isExpand, setIsExpand] = useState(false);

  const renderOptions = () => {
    return menuList.map((data, index) => {
      return Object.keys(data.children).length === 0 ? (
        <View style={index !== menuList.length - 1 && styles.border}>
          <View style={{paddingHorizontal: 16}}>
            <SideMenuItem
              key={data.title}
              label={data.title}
              Icon={data.Icon}
            />
          </View>
        </View>
      ) : (
        <CreateExpandableView
          setIsExpand={setIsExpand}
          isExpand={isExpand}
          title={data.title}
          object={data.children}
          Icon={data.Icon}
        />
      );
    });
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Animated.View entering={FadeInDown.duration(800)}>
        {renderOptions()}
      </Animated.View>
    </ScrollView>
  );
};

export default SideMenuView;
