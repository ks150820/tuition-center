import React from 'react';
import SettingItem from '../setting-item';

/**
 * View for Setting option
 * @param {ISettingOptionViewProps} props
 * @returns
 */
const SettingOptionView: React.FunctionComponent<ISettingOptionViewProps> = ({
  selectedOption,
  handleSettingClick,
  placeHolder,
  iconName,
  iconType,
}) => {
  return (
    <SettingItem
      iconName={iconName}
      iconType={iconType}
      label={placeHolder}
      value={selectedOption.label}
      onPress={handleSettingClick}
    />
  );
};

export {SettingOptionView};
