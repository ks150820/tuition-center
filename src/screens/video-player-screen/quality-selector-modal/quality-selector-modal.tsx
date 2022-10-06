import React from 'react';
import QualitySelectorModalView from './quality-selector-modal-view';
import useQualitySelectorModalViewController from './quality-selector-modal-view-controller';

/**
 * Binder for for QualitySelectorModal
 * @param {IQualitySelectorModalProps} props
 * @returns
 */
const QualitySelectorModal: React.FunctionComponent<
  IQualitySelectorModalProps
> = props => {
  const {isVisible, toggleModal} = useQualitySelectorModalViewController();

  return (
    <QualitySelectorModalView
      isVisible={isVisible}
      onHideModal={() => toggleModal(false)}
      {...props}
    />
  );
};

export default QualitySelectorModal;
