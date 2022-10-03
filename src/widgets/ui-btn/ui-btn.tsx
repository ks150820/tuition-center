import React from 'react';
import UIBtnView from './ui-btn-view';

/**
 * Button widget for common use
 * @param {IUIBtnViewProps} props
 * @returns
 */
const UIBtn: React.FunctionComponent<IUIBtnViewProps> = props => {
  return <UIBtnView {...props} />;
};

export default UIBtn;
