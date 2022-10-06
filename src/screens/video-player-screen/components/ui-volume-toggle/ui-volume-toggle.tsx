import React from 'react';
import COLORS from 'theme/colors';
import {ICON_TYPES} from '@theme/icons';
import UIToggleButton from 'widgets/ui-toggle-button';
import useVolumeToggleViewController from './ui-volume-toggle-view-controller';

/**
 * Widget for volume toggle button
 * @param {IVolumeToggleProps} props
 * @returns
 */

const VolumeToggle: React.FunctionComponent<IVolumeToggleProps> = ({
  toggleCb,
  defaultValue,
  iconSize,
  containerStyle,
}) => {
  const {toggleMute, iconName} = useVolumeToggleViewController({
    toggleCb,
    defaultValue,
  });

  return (
    <UIToggleButton
      iconName={iconName}
      iconSize={iconSize}
      iconColor={COLORS.white}
      iconType={ICON_TYPES.fontAwesomeFive}
      containerStyle={containerStyle}
      handleOnPress={toggleMute}
    />
  );
};

export default VolumeToggle;
