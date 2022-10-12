import React from 'react';
import SingleSelectOptionView from './ui-single-select-option-view';

interface ISingleSelectOptionProps extends ISingleSelectOptionViewProps {}

/**
 * Widget for single select option item
 * @param {ISingleSelectOptionProps} props
 * @returns
 */
const SingleSelectOption: React.FunctionComponent<
  ISingleSelectOptionProps
> = props => {
  return <SingleSelectOptionView {...props} />;
};

export default SingleSelectOption;
