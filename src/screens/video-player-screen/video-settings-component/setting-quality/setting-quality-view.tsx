import React from 'react';
import {PLAYER_TEXT} from 'resources/values/strings';
import {ICON_TYPES} from 'theme/icons';
import SettingOption from '../setting-option';

/**
 * View for video quality setting
 * @param {ISettingOptionWrapperViewProps} props
 * @returns
 */

const ICON_NAME = 'video-settings';

const SettingQualityView: React.FunctionComponent<
  ISettingOptionWrapperViewProps
> = ({appLanguage, options, selectedOption, onChange}) => {
  return (
    <SettingOption
      iconName={ICON_NAME}
      iconType={ICON_TYPES.material}
      options={options}
      selectedOption={selectedOption}
      onChange={onChange}
      placeHolder={PLAYER_TEXT.QUALITY[appLanguage]}
    />
  );
};

export default SettingQualityView;
