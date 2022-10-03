import React from 'react';
import SingleSelectorView from './ui-single-selector-view';

interface ISingleSelectorProps extends ISingleSelectorViewProps {}

/**
 * Widget for single item selection from given list
 * @param {ISingleSelectorProps} props
 * @returns
 */
const SingleSelector: React.FunctionComponent<ISingleSelectorProps> = props => {
  return <SingleSelectorView {...props} />;
};

export default SingleSelector;
