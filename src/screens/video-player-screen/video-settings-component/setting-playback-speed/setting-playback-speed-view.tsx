import React from 'react';
import {PLAYER_TEXT} from 'resources/values/strings';
import {ICON_TYPES} from 'theme/icons';
import SettingOption from '../setting-option';

/**
 * View for playback speed setting
 * @param {ISettingOptionWrapperViewProps} props
 * @returns
 */

const ICON_NAME = 'play-speed';

const SettingPlaybackSpeedView: React.FunctionComponent<
  ISettingOptionWrapperViewProps
> = ({appLanguage, options, selectedOption, onChange}) => {
  return (
    <SettingOption
      iconName={ICON_NAME}
      iconType={ICON_TYPES.materialCommunity}
      options={options}
      selectedOption={selectedOption}
      onChange={onChange}
      placeHolder={PLAYER_TEXT.SPEED[appLanguage]}
    />
  );
};

export default SettingPlaybackSpeedView;
