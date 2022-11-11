import React from 'react';
import HeaderWithBackButtonView from './ui-header-with-back-button-view';

interface IHeaderWithBackButtonProps extends IHeaderWithBackButtonViewProps {}

/**
 * Widget to render back button along with some label
 * @param {IHeaderWithBackButtonProps} props
 * @returns
 */
const HeaderWithBackButton: React.FunctionComponent<
  IHeaderWithBackButtonProps
> = props => {
  return <HeaderWithBackButtonView {...props} />;
};

export default HeaderWithBackButton;
