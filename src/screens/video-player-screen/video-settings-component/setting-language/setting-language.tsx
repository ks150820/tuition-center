import React from 'react';
import useSettingLanguageViewController from './setting-language-controller';
import SettingLanguageView from './setting-language-view';

/**
 * Binder for language setting
 * @param {ISettingOptionWrapperProps} props
 * @returns
 */
const SettingLanguage: React.FunctionComponent<
  ISettingOptionWrapperProps
> = props => {
  const {appLanguage} = useSettingLanguageViewController();

  return <SettingLanguageView appLanguage={appLanguage} {...props} />;
};

export default SettingLanguage;
