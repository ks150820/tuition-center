import React from 'react';

import useUICheckboxController from './ui-checkbox-controller';
import UICheckboxView from './ui-checkbox-view';

type onSelectType = (name: string, isClicked: boolean) => void;
interface IUICheckboxProps {
  label: string;
  name: string;
  onSelect: onSelectType;
}

/**
 *
 * @param {string} params.label it used to give the title to checkbox
 * @param {string} params.name to specify the name of checkbox
 * @param {onSelectType} params.onSelect it is used to enable and disable the checkbox according to their checkbox name
 * @returns
 */
const UICheckbox: React.FC<IUICheckboxProps> = ({label, name, onSelect}) => {
  const {isClicked, handleCheckbox} = useUICheckboxController({onSelect});
  return (
    <UICheckboxView
      label={label}
      name={name}
      isClicked={isClicked}
      handleCheckbox={handleCheckbox}
    />
  );
};

export default UICheckbox;
