import React, {useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import UIRow from '@widgets/ui-row';
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

import ChevronDownIcon from '@resources/icons/chevron-down';
import {useSharedValue} from 'react-native-reanimated';
import ProfileDetailsView from '../profile-details/profile-details-view';
import useHamburgerActions from './side-menu-view-controller';
import {actionsType, menuList} from './constants';

const CreateChildForExpandable = ({
  childrenObject,
}: {
  childrenObject: childType[];
}) => {
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
          actions={childrenObject[child].actions}
        />
      </View>,
    );
  }
  return <View style={styles.expandableViewChildContainer}>{list}</View>;
};

const CreateExpandableView = ({
  title,
  childrenObject,
  setIsExpand,
  isExpand,
  Icon,
  actions,
}: {
  title: string;
  childrenObject: childType[];
  setIsExpand: any;
  isExpand: boolean;
  Icon?: any;
  actions: any;
}) => {
  const rotation = useSharedValue(180);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
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
          <SideMenuItem Icon={Icon} label={title} actions={actions} />
          <Animated.View style={animatedStyles}>
            <ChevronDownIcon />
          </Animated.View>
        </UIRow>
      </Pressable>

      <View>
        {isExpand && (
          <View>
            <Animated.View entering={FadeIn.duration(800)}>
              <CreateChildForExpandable childrenObject={childrenObject} />
            </Animated.View>
          </View>
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
  actions,
}: {
  label: string;
  Icon?: iconType;
  ExtraLabel?: any;
  actions?: typeActions;
}) => {
  const {onCall, onWhatsappShare} = useHamburgerActions();
  return (
    <Pressable
      onPress={() => {
        if (actions) {
          if (actions.type && actions.type === actionsType.openDialer) {
            onCall(actions.data);
          }
          if (actions.type && actions.type === actionsType.openWhatsapp) {
            onWhatsappShare(actions.data, actions.extra || '');
          }
        }
      }}>
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
      return Object.keys(data.childrens).length === 0 ? (
        <View style={index !== menuList.length - 1 && styles.border}>
          <View style={{paddingHorizontal: 16}}>
            <SideMenuItem
              key={data.title}
              label={data.title}
              Icon={data.Icon}
              ExtraLabel={data.ExtraLabelView}
              actions={data.actions}
            />
          </View>
        </View>
      ) : (
        <CreateExpandableView
          setIsExpand={setIsExpand}
          isExpand={isExpand}
          title={data.title}
          childrenObject={data.childrens}
          Icon={data.Icon}
          actions={data.actions}
        />
      );
    });
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Animated.View entering={FadeInDown.duration(800)}>
        <ProfileDetailsView />
        {renderOptions()}
      </Animated.View>
    </ScrollView>
  );
};

export default SideMenuView;
