import React from 'react';
import {View} from 'react-native';
import {ReactNativeModal as Modal} from 'react-native-modal';
import {styles} from './resources/styles/styles';
import {COLORS} from '@resources/colors';

/**
 * View for Modal
 * @param {IModalViewProps} props
 * @returns
 */

const ANIMATION_IN = 'slideInUp';
const ANIMATION_OUT = 'slideOutDown';
const BACKDROP_OPACITY = 0.52;

const ModalView: React.FunctionComponent<IModalViewProps> = ({
  animationIn = ANIMATION_IN,
  animationOut = ANIMATION_OUT,
  backdropColor = COLORS.BLACK,
  backdropOpacity = BACKDROP_OPACITY,
  children,
  containerStyle,
  isVisible,
  onBackButtonPress,
  onBackdropPress,
  testID,
}) => {
  return (
    <Modal
      backdropColor={backdropColor}
      backdropOpacity={backdropOpacity}
      animationIn={animationIn} // Has others, we want slide in from the left: ;
      animationOut={animationOut} // When discarding the drawer
      useNativeDriver // Faster animation
      hideModalContentWhileAnimating // Better performance, try with/without
      isVisible={isVisible}
      propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
      style={styles.modal} // Remove default padding
      testID={testID}
      onBackButtonPress={() => onBackButtonPress?.()}
      onBackdropPress={() => onBackdropPress?.()}>
      <View style={[styles.contentContainer, containerStyle]}>{children}</View>
    </Modal>
  );
};

export default ModalView;
