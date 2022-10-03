import React from 'react';
import UITextView from './ui-text-view';

/**
 * Widget to render customizable text
 * @param {IUITextViewProps} props
 * @returns
 */
const UIText: React.FunctionComponent<IUITextViewProps> = props => {
  return <UITextView {...props} />;
};

export default UIText;
