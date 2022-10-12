import React from 'react';
import {View, Dimensions} from 'react-native';
import Modal from 'react-native-modal';

import {styles} from './ui-bottom-sheet-style';

const deviceWidth = Dimensions.get('window').width; // to get the device window width
const deviceHeight = Dimensions.get('window').height; // to get the device window height

/**
 *
 * @param {boolean} params.visible this is the toggle condition to set the bottom sheet visible or un-visible
 * @param {string} params.height this is an optional parameter to set the height of the bottom sheet
 * @param {ModalAnimations} params.animationIn to set animation in property to bottom sheet
 * @param {ModalAnimations} params.animationOut to set the animation out property to bottom sheet
 * @param {swipeDirection} params.swipeDirection to set the direction to bottom sheet
 * @param {number} params.borderTopRadius to set the top border radius on bottom sheet
 * @param {JSX.Element} params.children it can be anything like component, text etc.
 * @param params.onBackDropPress this is an call back method to perform action when press on outside the modal basically in outside blank area of bottom sheet
 * @param params.onBackButtonPress this is an call back method to perform action when someone press the mobile back button
 * @returns
 */
const UIBottomSheetView: React.FC<IBottomSheetProps> = ({
  visible,
  height = '92%',
  animationIn = 'slideInUp',
  animationOut = 'slideOutDown',
  swipeDirection = 'down',
  borderTopRadius = 10,
  children,
  onBackDropPress,
  onBackButtonPress,
}) => {
  return (
    <Modal
      accessibilityLabel="bottom-sheet-modal"
      isVisible={visible}
      hasBackdrop={true}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      onSwipeComplete={() => {
        if (onBackButtonPress) {
          onBackButtonPress();
        }
      }}
      animationIn={animationIn} // Has others, we want slide in from the left: ;
      animationOut={animationOut} // When discarding the drawer
      swipeDirection={swipeDirection} // Discard the drawer with swipe to left: ;
      useNativeDriver // Faster animation
      hideModalContentWhileAnimating // Better performance, try with/without
      propagateSwipe={true} // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
      style={{...styles.sideMenuStyle, width: deviceWidth}} // Needs to contain the width, 75% of screen width in our case
      backdropColor="#292929"
      backdropOpacity={0.52}
      onBackButtonPress={() => {
        if (onBackButtonPress) {
          onBackButtonPress();
        }
      }}
      testID="backButtonPress"
      onBackdropPress={() => {
        if (onBackDropPress) {
          onBackDropPress();
        }
      }}>
      <View
        style={{
          ...styles.childrenComponent,
          height: height,
          borderTopStartRadius: borderTopRadius,
          borderTopEndRadius: borderTopRadius,
          maxHeight: deviceHeight,
        }}>
        {children}
      </View>
    </Modal>
  );
};

export default UIBottomSheetView;
