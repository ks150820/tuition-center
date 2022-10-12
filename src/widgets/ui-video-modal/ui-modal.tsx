import React from 'react';
import ModalView from './ui-modal-view';

interface IModalProps extends IModalViewProps {}

/**
 * View for modal or bottom sheet
 * @param {IModalProps} props
 * @returns
 */
const Modal: React.FunctionComponent<IModalProps> = props => {
  return <ModalView {...props} />;
};

export default Modal;
