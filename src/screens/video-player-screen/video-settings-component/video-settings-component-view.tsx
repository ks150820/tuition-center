import React from 'react';
import {View} from 'react-native';
import UIBottomSheet from 'widgets/ui-bottom-sheet';
import SingleSelector from 'widgets/ui-single-selector';
import UIText from 'widgets/ui-text';
import {PLAYER_TEXT} from '../../resources/values/strings';
import {FONT_SIZE, FONT_TYPE} from '../../themes/font';
import {styles} from './resources/styles/styles';

/**
 * View for VideoSettingsComponent
 * @param {IVideoSettingsComponentViewProps} props
 * @returns
 */

const VideoSettingsComponentView: React.FunctionComponent<
  IVideoSettingsComponentViewProps
> = ({
  appLanguage,
  children,
  toggleSettings,
  selectedSettingOption,
  style,
  onHideSettingOption,
  handleOnChange,
}) => {
  return (
    <UIBottomSheet
      testID={'settingModal'}
      isVisible={toggleSettings}
      onBackButtonPress={onHideSettingOption}
      onBackdropPress={onHideSettingOption}>
      <View style={[styles.container, style]}>
        {!selectedSettingOption.show && (
          <>
            <UIText
              containerStyle={styles.header}
              type={FONT_TYPE.semiBold}
              size={FONT_SIZE.medium}>
              {PLAYER_TEXT.SETTINGS[appLanguage]}
            </UIText>
            {children}
          </>
        )}
        {selectedSettingOption.show && (
          <SingleSelector
            options={selectedSettingOption?.options}
            selectedOption={selectedSettingOption?.selectedOption}
            placeHolder={selectedSettingOption?.placeHolder}
            onChange={handleOnChange}
            onBackPress={onHideSettingOption}
          />
        )}
      </View>
    </UIBottomSheet>
  );
};

export default VideoSettingsComponentView;
