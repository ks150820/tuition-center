import React from 'react';
import COLORS from 'theme/colors';
import {ICON_TYPES} from '@theme/icons';
import UIToggleButton from 'widgets/ui-toggle-button';
import useUIFullScreenToggleButtonViewController from './ui-full-screen-toggle-button-view-controller';

/**
 * Toggle button for full screen
 * @param {IUIFullScreenToggleButtonProps} props
 * @returns
 */

const ICON_SIZE = 28;
const ICON_ENTER_FULL_SCREEN = 'fullscreen';
const ICON_EXIT_FULL_SCREEN = 'fullscreen-exit';

const UIFullScreenToggleButton: React.FunctionComponent<
  IUIFullScreenToggleButtonProps
> = ({
  defaultValue = false,
  fullScreenToggleCb = f => f,
  color = COLORS.white,
  iconSize = ICON_SIZE,
  containerStyle,
  testID,
}) => {
  const {isFullScreen, toggleFullScreen} =
    useUIFullScreenToggleButtonViewController({
      defaultValue,
      fullScreenToggleCb,
    });

  return (
    <UIToggleButton
      iconName={isFullScreen ? ICON_EXIT_FULL_SCREEN : ICON_ENTER_FULL_SCREEN}
      iconSize={iconSize}
      iconColor={color}
      iconType={ICON_TYPES.materialIcons}
      containerStyle={containerStyle}
      handleOnPress={toggleFullScreen}
      testID={testID}
    />
  );
};

export default UIFullScreenToggleButton;
