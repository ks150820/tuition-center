import React from 'react';
import {SettingOptionView} from './setting-option-view';
import useSettingOptionViewController from './setting-option-view-controller';

/**
 * Binder for setting option
 * @param props
 * @returns
 */

const SettingOption: React.FunctionComponent<ISettingOptionProps> = ({
  options,
  selectedOption,
  onChange,
  iconName,
  iconType,
  placeHolder,
}) => {
  const {handleSettingClick} = useSettingOptionViewController({
    options,
    selectedOption,
    onChange,
    placeHolder,
  });

  return (
    <SettingOptionView
      selectedOption={selectedOption}
      handleSettingClick={handleSettingClick}
      iconName={iconName}
      iconType={iconType}
      placeHolder={placeHolder}
    />
  );
};

export default SettingOption;
