/* eslint-disable prettier/prettier */
import React, {ReactElement} from 'react';
import {
  View,
  Dimensions,
} from 'react-native';

import {styles} from './ui-modal-view-style';

import Modal from 'react-native-modal';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

interface IUiModalViewProps {
  isBottomSheet?: boolean;
  height?: string;
  modalVisible: boolean;
  children: ReactElement;
}

/**
 * View for Ui-modal
 * @param {boolean} params.isBottomSheet this is the condition to open the bottom sheet
 * @param {string} params.height to set the height of the bottom sheet
 * @param {boolean} params.modalVisible to open the modal or bottom sheet
 * @param {ReactElement} params.children its an react component
 * @returns
 */
const UiModalView = ({
  isBottomSheet = false,
  height = '50%',
  modalVisible,
  children,
}: IUiModalViewProps): ReactElement => {
  return (
    <View>
      <Modal
        isVisible={modalVisible}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={isBottomSheet && styles.modalBottomSheetComponent}
        backdropOpacity={0.4}>
        <View
          style={
            isBottomSheet
              ? {
                  ...styles.modalViewBottomSheetChildrenComponent,
                  height: height,
                }
              : styles.modalView
          }>
          {children}
        </View>
      </Modal>
    </View>
  );
};

export default UiModalView;
