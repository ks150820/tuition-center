import {useSelector} from 'react-redux';
import {getAppLanguage} from '../../store/entities/user-preferences';
import {useState} from 'react';

/**
 * View Controller for VideoSettingsComponent
 * @param {IVideoSettingsComponentViewController} props
 * @returns
 */

const defaultSettingOption = {
  show: false,
  options: [],
  selectedOption: {key: '', label: '', value: 0},
  placeHolder: '',
  onChange: (_option: ISingleSelectOptions) => {},
};

const useVideoSettingsComponentViewController = ({
  handleToggleSettings,
}: IVideoSettingsComponentViewControllerProps): IVideoSettingsComponentViewController => {
  const appLanguage = useSelector(getAppLanguage);
  const [selectedSettingOption, setSettingsOptions] =
    useState<ISelectedSettingOptionProps>(defaultSettingOption);

  const updateSelectedSettingOption = (
    payload: ISelectedSettingOptionProps,
  ) => {
    setSettingsOptions(payload);
  };
  const value = {
    selectedSettingOption,
    updateSelectedSettingOption,
  };

  // Method to handle change of option
  const handleOnChange = (option: ISingleSelectOptions) => {
    selectedSettingOption?.onChange(option);
    onHideSettingOption();
  };

  // Method to handle hide setting options
  // Here if inner depth is visible than first it'll hide that,
  // than on second callback display outer screen with different setting list
  const onHideSettingOption = () => {
    if (selectedSettingOption.show) {
      updateSelectedSettingOption({...selectedSettingOption, show: false});
    } else {
      handleToggleSettings();
    }
  };

  return {
    value,
    appLanguage,
    selectedSettingOption,
    onHideSettingOption,
    handleOnChange,
  };
};

export default useVideoSettingsComponentViewController;
