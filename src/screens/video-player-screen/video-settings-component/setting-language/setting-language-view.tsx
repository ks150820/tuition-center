import React from 'react';
import {PLAYER_TEXT} from 'resources/values/strings';
import {ICON_TYPES} from 'theme/icons';
import SettingOption from '../setting-option';

/**
 * View for language setting
 * @param {ISettingOptionWrapperViewProps} props
 * @returns
 */

const ICON_NAME = 'video-settings';

const SettingLanguageView: React.FunctionComponent<
  ISettingOptionWrapperViewProps
> = ({appLanguage, options, selectedOption, onChange}) => {
  return (
    <SettingOption
      iconName={ICON_NAME}
      iconType={ICON_TYPES.material}
      options={options}
      selectedOption={selectedOption}
      onChange={onChange}
      placeHolder={PLAYER_TEXT.LANGUAGE[appLanguage]}
    />
  );
};

export default SettingLanguageView;
