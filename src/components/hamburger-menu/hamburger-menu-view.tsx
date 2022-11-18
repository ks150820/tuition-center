import React, {createContext, SetStateAction} from 'react';
import Modal from 'react-native-modal';
import {SIDE_MENU_VIEW_ANIMATION, SWIPE_DIRECTION} from './constants';
import SideMenuView from './side-menu-view';
import styles from './style';
import colors from '@theme/colors';
interface IHamburgerMenu {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IHamburgerContext {
  isVisible: boolean | undefined;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}
export const HamburgerContext = createContext<IHamburgerContext>({
  isVisible: undefined,
  setIsVisible: undefined,
});
/**
 *
 * @param props.isVisible  default value is false , it will decide weather to open the hamburger menu or not
 * @returns a slide open view
 */
const HamburgerMenu: React.FunctionComponent<IHamburgerMenu> = ({
  isVisible = false,
  setIsVisible,
}) => {
  return (
    // Other parts of our screen
    // Modal needs to be included
    // Visible only when toggleSideMenu is pressed
    <HamburgerContext.Provider value={{isVisible, setIsVisible}}>
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(!isVisible)} // Android back press
        animationIn={SIDE_MENU_VIEW_ANIMATION.ANIMATION_IN} // Has others, we want slide in from the left
        animationOut={SIDE_MENU_VIEW_ANIMATION.ANIMATION_OUT} // When discarding the drawer
        swipeDirection={SWIPE_DIRECTION.LEFT} // Discard the drawer with swipe to left
        useNativeDriver // Faster animation
        hideModalContentWhileAnimating // Better performance, try with/without
        propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
        onSwipeComplete={() => setIsVisible(false)} // swipe left to cancel
        style={styles.sideMenuContainer} // Needs to contain the width, 75% of screen width in our case
        coverScreen={true}
        backdropColor={colors.gray_scale.mine_shaft}>
        <SideMenuView />
      </Modal>
    </HamburgerContext.Provider>
  );
};

export default HamburgerMenu;
