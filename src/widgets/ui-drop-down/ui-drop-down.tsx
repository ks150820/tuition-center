import React from 'react';
import UIDropDownView from './ui-drop-down-view';

/**
 *
 * @param {string} params.label to give the title to dropdown
 * @param {childrenType} params.children it can be component, text or anything
 * @param {string} params.optionsValue it is the value of options which we selected from the dropdown
 * @param {Object} params.layoutStyle it used to give the styling to dropdown layout
 * @param {ShowOptionType} params.handleShowOptions this is a method, use to handle the dropdown options
 * @returns
 */

const UIDropDown: IDropdownViewComponent<IUIDropDownViewProps> = ({
  label,
  children,
  optionsValue,
  layoutStyle,
  dropDownStyle,
  handleShowOptions,
}) => {
  return (
    <UIDropDownView
      label={label}
      children={children}
      handleShowOptions={handleShowOptions}
      optionsValue={optionsValue}
      layoutStyle={layoutStyle}
      dropDownStyle={dropDownStyle}
    />
  );
};

UIDropDown.UIDropdownView = UIDropDownView.UIDropdownView;
UIDropDown.Options = UIDropDownView.Options;

export default UIDropDown;
