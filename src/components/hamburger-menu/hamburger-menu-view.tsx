import colors from '@theme/colors';
import React, {useRef} from 'react';
import Modal from 'react-native-modal';
import SideMenuView from './side-menu-view';
import styles from './style';
interface IHamburgerMenu {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
/**
 *
 * @param props.isVisible  default value is false , it will decide weather to open the hamburger menu or not
 * @returns a slide open view
 */
const HamburgerMenu = ({isVisible = false, setIsVisible}: IHamburgerMenu) => {
  const refModal = useRef<any>();
  return (
    // Other parts of our screen
    // Modal needs to be included
    // Visible only when toggleSideMenu is pressed
    <Modal
      ref={refModal}
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(!isVisible)} // Android back press
      animationIn="slideInLeft" // Has others, we want slide in from the left
      animationOut="slideOutLeft" // When discarding the drawer
      swipeDirection="left" // Discard the drawer with swipe to left
      useNativeDriver // Faster animation
      hideModalContentWhileAnimating // Better performance, try with/without
      propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
      onSwipeComplete={() => setIsVisible(false)} // swipe left to cancel
      style={styles.sideMenuContainer} // Needs to contain the width, 75% of screen width in our case
      coverScreen={true}
      backdropColor={colors.gray_scale.mine_shaft}>
      <SideMenuView />
    </Modal>
  );
};

export default HamburgerMenu;
