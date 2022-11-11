import React from 'react';
import {useVideoPlayerContext} from 'screens/video-player-screen/video-player/video-player-view-controller';
import VideoSettingsComponent from 'screens/video-player-screen/video-settings-component';
import UIMoreOptionBtn from '../../components/ui-more-option-btn';

/**
 * Component to show setting modal
 * @param {IContainerProps} params
 * @returns
 */
const Settings: React.FunctionComponent<IContainerProps> = ({children}) => {
  const {settingModalVisible, handleSettingModalVisibility} =
    useVideoPlayerContext();
  return (
    <>
      <UIMoreOptionBtn
        onPress={() => {
          handleSettingModalVisibility({visible: true});
        }}
      />
      <VideoSettingsComponent
        handleToggleSettings={() =>
          handleSettingModalVisibility({visible: false})
        }
        toggleSettings={settingModalVisible}
        useDefault={true}>
        {children}
      </VideoSettingsComponent>
    </>
  );
};

export default Settings;
