import React, {ReactElement} from 'react';
import UiModalView from './ui-modal-view';

interface IUiModalProps {
  modalVisible: boolean;
  height?: string;
  children: ReactElement;
  isBottomSheet: boolean;
}

/**
 * this component return modal ui or bottom sheet ui
 * @param {boolean} params.isBottomSheet this condition is used to open the bottom sheet or modal
 * @param {boolean} params.modalVisible to open the modal or bottom sheet
 * @param {ReactElement} params.children its an react component
 *
 */
const UiModal: React.FC<IUiModalProps> = ({
  isBottomSheet,
  modalVisible,
  height,
  children,
}) => {
  return (
    <UiModalView
      modalVisible={modalVisible}
      children={children}
      height={height}
      isBottomSheet={isBottomSheet}
    />
  );
};

export default UiModal;
