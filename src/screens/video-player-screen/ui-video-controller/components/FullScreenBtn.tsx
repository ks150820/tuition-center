import React from 'react';
import {useVideoPlayerContext} from 'screens/video-player-screen/video-player/video-player-view-controller';
import UIFullScreenToggleButton from '../../components/ui-full-screen-toggle-button';

/**
 * Compounding component for Full screen toggle button
 * @param {IUIFullScreenToggleButtonProps} params
 * @returns
 */
const FullScreenBtn: React.FunctionComponent<
  IUIFullScreenToggleButtonProps
> = ({fullScreenToggleCb, defaultValue = false, containerStyle}) => {
  // Destructure required data from player context
  const {changeOrientation} = useVideoPlayerContext();
  return (
    <UIFullScreenToggleButton
      containerStyle={containerStyle}
      defaultValue={defaultValue}
      fullScreenToggleCb={value => {
        fullScreenToggleCb?.(value);
        changeOrientation();
      }}
    />
  );
};

export default FullScreenBtn;
