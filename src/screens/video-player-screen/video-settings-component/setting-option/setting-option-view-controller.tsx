import {useVideoSettingsContext} from '../resources/video-settings-context';

/**
 * View Controller for QualitySetting
 * @param props
 * @returns
 */
const useSettingOptionViewController = ({
  options,
  selectedOption,
  onChange,
  placeHolder,
}: ISettingOptionViewControllerProps) => {
  const {updateSelectedSettingOption} = useVideoSettingsContext();

  // Method to handle setting item click event,
  // It will render inner options view
  const handleSettingClick = () => {
    updateSelectedSettingOption({
      show: true,
      options,
      selectedOption,
      onChange,
      placeHolder: placeHolder,
    });
  };

  return {handleSettingClick};
};

export default useSettingOptionViewController;
