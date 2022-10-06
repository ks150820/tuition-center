import React from 'react';
import COLORS from 'theme/colors';
import {ICON_TYPES} from '@theme/icons';
import UIToggleButton from 'widgets/ui-toggle-button';

/**
 * Widget for play button
 * @param {IPlayButtonProps} props
 * @returns
 */

const ICON_SIZE = 22;
const ICON_REPLAY = 'replay';
const ICON_PLAY = 'play';
const ICON_PAUSE = 'pause';

const PlayButton: React.FunctionComponent<IPlayButtonProps> = ({
  toggleCb,
  defaultValue,
  iconSize = ICON_SIZE,
  isVideoEnded,
  style,
  color = COLORS.white,
  testID,
}) => {
  const iconType = isVideoEnded
    ? ICON_TYPES.material
    : ICON_TYPES.fontAwesomeFive;

  const iconName = isVideoEnded
    ? ICON_REPLAY
    : defaultValue
    ? ICON_PLAY
    : ICON_PAUSE;

  return (
    <UIToggleButton
      iconName={iconName}
      iconType={iconType}
      iconColor={color}
      iconSize={iconSize}
      containerStyle={style}
      handleOnPress={toggleCb}
      testID={testID}
    />
  );
};

export default PlayButton;
