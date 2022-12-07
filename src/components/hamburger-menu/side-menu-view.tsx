import React, {useContext, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {HamburgerContext} from './hamburger-menu-view';
/**
 *
 * @param  props.childrens  it is used when there is multiple child  for a  expandable view . childrens contains one or more child's
 * @returns returns a view with rendered child object
 */
interface ICreateChildForExpandable {
  childrens: childType[];
}
const CreateChildForExpandable: React.FunctionComponent<
  ICreateChildForExpandable
> = ({childrens}) => {
  let list = [];
  let index = 0;
  for (const child in childrens) {
    index = index + 1;
    list.push(
      <View
        key={childrens[child].title}
        style={index !== Object.keys(childrens).length && styles.border}>
        <SideMenuItem
          Icon={childrens[child].Icon}
          label={childrens[child].title}
          actions={childrens[child].actions}
        />
      </View>,
    );
  }
  return <View style={styles.expandableViewChildContainer}>{list}</View>;
};

/**
 * @param props.title  title for the view
 * @param props.childrens  child,s of an expandable view
 * @param props.setIsExpand  setState function to control expansion and collapse of the view
 * @param props.isExpand  boolean to check weather the view is expanded or not
 * @param props.Icon it will render the icon
 * @param props.actions actions that needed to be carried out while clicking a view
 * @returns a view that we can expand and collapse
 */
interface ICreateExpandableView {
  title: string;
  childrens: childType[];
  setIsExpand: any;
  isExpand: boolean;
  Icon?: iconType;
  actions?: typeActions;
}
const CreateExpandableView: React.FunctionComponent<ICreateExpandableView> = ({
  title,
  childrens,
  setIsExpand,
  isExpand,
  Icon,
  actions,
}) => {
  // in order to control the rotation of chevron icon while expanding and collapsing a view initial value is set to 180 deg , useSharedValue is the part react-native re animation
  const rotation = useSharedValue<number>(360);
  //by using useAnimatedStyle we will control the rotation of the icon
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
          //if the view is expanded we will set the rotation z axis  to 360 and if its not expanded we will set it back to 180
          rotation.value = isExpand
            ? withTiming(360, {duration: 300, easing: Easing.inOut(Easing.exp)})
            : withTiming(180, {
                duration: 300,
                easing: Easing.inOut(Easing.exp),
              });
        }}>
        <UIRow style={styles.expandableViewHeaderContainer}>
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
              <CreateChildForExpandable childrens={childrens} />
            </Animated.View>
          </View>
        )}
      </View>
    </View>
  );
};
/**
 *
 * @param label string value to display as title
 * @returns rendered text view
 */
interface ISideMenuLabel {
  label: string;
}
const SideMenuLabel: React.FunctionComponent<ISideMenuLabel> = ({label}) => {
  return (
    <UIText style={styles.slideMenuLabel} FontType={FONT_TYPE.HAMBURGER}>
      {label}
    </UIText>
  );
};
/**
 *
 * @param props.label label or title on the view
 * @param props.Icon icon to render left to label
 * @param props.ExtraLabel extra actions label to render right to the item example language switch
 * @param props.actions actions to be completed while clicking an item
 * @returns a view to be rendered on the side menu view
 */
interface ISideMenuItem {
  label: string;
  Icon?: iconType;
  ExtraLabel?: any;
  actions?: typeActions;
}
const SideMenuItem: React.FunctionComponent<ISideMenuItem> = ({
  label,
  Icon,
  ExtraLabel,
  actions,
}) => {
  const navigation = useNavigation<freeVideosScreensNavigation>();
  const {onCall, onWhatsappShare} = useHamburgerActions();
  const {setIsVisible} = useContext(HamburgerContext);
  return (
    <Pressable
      onPress={() => {
        setIsVisible && setIsVisible(false);
        navigation.navigate('ProfileScreen');
        if (actions) {
          if (actions.type && actions.type === actionsType.openDialer) {
            onCall(actions.data); // check side menu view controller. it will open the dialer with provided number
          }
          if (actions.type && actions.type === actionsType.openWhatsapp) {
            onWhatsappShare(actions.data, actions.extra || ''); // check side menu view controller. it will open whatsapp chat on the given number and message
          }
        }
      }}>
      <UIRow style={styles.slideMenuItemContainer}>
        <UIRow style={styles.alignCenter}>
          {Icon ? <Icon /> : null}
          <SideMenuLabel label={String(label)} />
        </UIRow>
        {ExtraLabel ? <ExtraLabel /> : null}
      </UIRow>
    </Pressable>
  );
};

const SideMenuView: React.FunctionComponent = () => {
  const [isExpand, setIsExpand] = useState(false);

  /**
   * it will render the view if the length of children is > 0 it will create an expandable view otherwise normal view
   */
  const renderOptions = () => {
    return menuList.map((data, index) => {
      return Object.keys(data.childrens).length === 0 ? (
        <View
          key={data.title}
          style={index !== menuList.length - 1 && styles.border}>
          <View style={{paddingHorizontal: 16}}>
            <SideMenuItem
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
          childrens={data.childrens}
          Icon={data.Icon}
          actions={data.actions}
          key={data.title}
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
