import React from 'react';
import BackButtonView from './ui-back-button-view';

/**
 * Back Button for exiting video player
 * @param {IBackBtn} props
 * @returns
 */
const BackButton: React.FunctionComponent<IBackBtn> = props => {
  return <BackButtonView {...props} />;
};

export default BackButton;
