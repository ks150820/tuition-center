import React from 'react';
import UIBottomSheetView from './ui-bottom-sheet-view';

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
const UIBottomSheet: React.FC<IBottomSheetProps> = ({
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
    <UIBottomSheetView
      visible={visible}
      height={height}
      animationIn={animationIn}
      animationOut={animationOut}
      swipeDirection={swipeDirection}
      borderTopRadius={borderTopRadius}
      children={children}
      onBackDropPress={onBackDropPress}
      onBackButtonPress={onBackButtonPress}
    />
  );
};

export default UIBottomSheet;
