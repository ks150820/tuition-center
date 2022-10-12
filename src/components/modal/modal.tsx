import ModalView from './modal-view';
import React from 'react';

const Modal: React.FC<IModalView> = ({children, isVisible}) => {
  return <ModalView isVisible={isVisible}>{children}</ModalView>;
};

export default Modal;
