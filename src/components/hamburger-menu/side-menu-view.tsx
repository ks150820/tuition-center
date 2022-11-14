import {Pressable, ScrollView, View} from 'react-native';
import React, {useState, ReactNode} from 'react';
import UIRow from '@widgets/ui-row';
import Profile from '@assets/icons/profile';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import styles from './style';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import AppTutorialIcon from '@resources/icons/app-tutorial-hamburger';
import LanguageSwitchIcon from '@resources/icons/language-switch-hamburger';
import ProfileIcon from '@resources/icons/profile-icon-hamburger';
import AttemptedQuestionsIcon from '@resources/icons/attempted-questions-hamburger';
import HelpIcon from '@resources/icons/help-hamburger';
import PrivacyPolicyIcon from '@resources/icons/privacy-policy-hamburger';
import ShareNowIcon from './share-now-hamburger';
import RateUsIcon from '@resources/icons/rate-us-hamburger';
import ChevronDownIcon from '@resources/icons/chevron-down';
import {useSharedValue} from 'react-native-reanimated';
import LanguageSwitchView from './language-switch-label';
import CallNowIcon from '@resources/icons/call-now-hamburger';
import WhatsApp from '@resources/icons/whtasapp';
import HamburgerProfileView from './hamburger-profile-view';
import SavedQuestionsIcon from '@resources/icons/saved-questions-hamburger';
import PersonalDetailsIcon from '@resources/icons/personal-details-hamburger';

const menuList = [
  {
    title: 'Profile',
    Icon: ProfileIcon,
    children: {
      child1: {
        title: 'My Purchases',
        Icon: AppTutorialIcon,
      },
      child2: {
        title: 'Personal Details',
        Icon: PersonalDetailsIcon,
      },
    },
    ExtraLabelView: null,
  },
  {
    title: 'App tutorial',
    Icon: AppTutorialIcon,
    children: {},
    ExtraLabelView: null,
  },
  {
    title: 'Language',
    Icon: LanguageSwitchIcon,
    children: {},
    ExtraLabelView: LanguageSwitchView,
  },
  {
    title: 'Saved Questions',
    Icon: SavedQuestionsIcon,
    children: {},
    ExtraLabelView: null,
  },
  {
    title: 'Attempted Questions',
    Icon: AttemptedQuestionsIcon,
    children: {},
    ExtraLabelView: null,
  },
  {
    title: 'Help',
    Icon: HelpIcon,
    children: {},
    ExtraLabelView: CallNowIcon,
  },
  {
    title: 'Privacy policy',
    Icon: PrivacyPolicyIcon,
    children: {},
    ExtraLabelView: null,
  },
  {
    title: 'Share now',
    Icon: ShareNowIcon,
    children: {},
    ExtraLabelView: WhatsApp,
  },
  {
    title: 'Rate us',
    Icon: RateUsIcon,
    children: {},
    ExtraLabelView: null,
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
  const rotation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotateX: `${rotation.value}deg`}],
    };
  });

  return (
    <View style={[styles.expandableViewContainer, isExpand && styles.border]}>
      <Pressable
        onPress={() => {
          setIsExpand(!isExpand);
          rotation.value = isExpand
            ? withTiming(180, {duration: 300, easing: Easing.inOut(Easing.exp)})
            : withTiming(360, {
                duration: 300,
                easing: Easing.inOut(Easing.exp),
              });
        }}>
        <UIRow
          style={[
            styles.expandableViewHeaderContainer,
            {paddingHorizontal: 16},
          ]}>
          <SideMenuItem Icon={Icon} label={title} />
          <Animated.View style={animatedStyles}>
            <ChevronDownIcon />
          </Animated.View>
        </UIRow>
      </Pressable>

      <View>
        {isExpand && (
          <Animated.View entering={FadeIn.duration(800)}>
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
const SideMenuItem = ({
  label,
  Icon,
  ExtraLabel,
}: {
  label: string;
  Icon?: any;
  ExtraLabel?: any;
}) => {
  console.log('Icon', Icon);

  return (
    <Pressable onPress={() => {}}>
      <UIRow style={styles.slideMenuItemContainer}>
        <UIRow style={{alignItems: 'center'}}>
          {Icon ? <Icon /> : null}
          <SideMenuLabel label={String(label)} />
        </UIRow>
        {ExtraLabel ? <ExtraLabel /> : null}
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
              ExtraLabel={data.ExtraLabelView}
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
        <HamburgerProfileView/>
        {renderOptions()}
      </Animated.View>
    </ScrollView>
  );
};

export default SideMenuView;
