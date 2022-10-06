import React from 'react';
import {render} from '@testing-library/react-native';
import VideoSettingsComponentView from '../video-settings-component-view';
import {PLAYER_TEXT} from 'resources/values/strings';
import {View} from 'react-native';
import {act} from 'react-test-renderer';

test('Video setting view test cases', () => {
  // Mock event handler
  const onHideSettingOption = jest.fn();
  const handleOnChange = jest.fn();
  const onChange = jest.fn();
  // Prepare initial value
  const selectedSettingOption: ISelectedSettingOptionProps = {
    show: false,
    options: [{key: 'a', label: 'ABC', value: 101}],
    selectedOption: {key: 'a', label: 'ABC', value: 101},
    onChange: onChange,
    placeHolder: 'Label',
  };
  // Render view
  const {getByText, getByTestId} = render(
    <VideoSettingsComponentView
      appLanguage="en"
      onHideSettingOption={onHideSettingOption}
      selectedSettingOption={selectedSettingOption}
      toggleSettings={true}
      handleOnChange={handleOnChange}>
      <View />
    </VideoSettingsComponentView>,
  );

  // Verify text rendering
  const header = getByText(PLAYER_TEXT.SETTINGS.en);
  expect(header.props.children).toEqual(PLAYER_TEXT.SETTINGS.en);

  // Fire function programmatically and validate handler call
  const settingModal = getByTestId('settingModal');
  act(() => {
    settingModal.props.onBackdropPress();
  });
  expect(onHideSettingOption).toBeCalled();
});
