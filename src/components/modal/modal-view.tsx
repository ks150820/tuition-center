import {Dimensions} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './styles';

const ModalView: React.FC<IModalView> = ({children, isVisible}) => {
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  return (
    <Modal
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      isVisible={isVisible}
      style={styles.container}>
      {children}
    </Modal>
  );
};

export default ModalView;
