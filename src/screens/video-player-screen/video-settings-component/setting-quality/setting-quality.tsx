import React from 'react';
import useSettingQualityViewController from './setting-quality-controller';
import SettingQualityView from './setting-quality-view';

/**
 * Binder for video quality setting
 * @param {ISettingOptionWrapperProps} props
 * @returns
 */
const SettingQuality: React.FunctionComponent<
  ISettingOptionWrapperProps
> = props => {
  const {appLanguage} = useSettingQualityViewController();

  return <SettingQualityView appLanguage={appLanguage} {...props} />;
};

export default SettingQuality;
