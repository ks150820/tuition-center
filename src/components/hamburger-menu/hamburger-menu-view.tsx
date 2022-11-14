import React, {useRef} from 'react';
import Modal from 'react-native-modal';
import SideMenuView from './side-menu-view';
interface IHamburgerMenu {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
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
      //   onSwipeComplete={this.toggleSideMenu} // Swipe to discard
      animationIn="slideInLeft" // Has others, we want slide in from the left
      animationOut="slideOutLeft" // When discarding the drawer
      swipeDirection="left" // Discard the drawer with swipe to left
      useNativeDriver // Faster animation
      hideModalContentWhileAnimating // Better performance, try with/without
      propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
      style={{
        height: '100%',
        width: '80%',
        backgroundColor: 'white',
        margin: 0,
      }} // Needs to contain the width, 75% of screen width in our case
      coverScreen={true}
      backdropColor="pink">
      <SideMenuView />
    </Modal>
  );
};

export default HamburgerMenu;
