import {useState} from 'react';

interface IVolumeToggleViewControllerProps {
  defaultValue?: boolean;
  toggleCb: (newStateVal: boolean) => void;
}

/**
 * View Controller for VolumeToggle
 * @param {IVolumeToggleViewControllerProps} props
 * @returns
 */

const ICON_VOLUME_MUTE = 'volume-mute';
const ICON_VOLUME_UNMUTE = 'volume-up';

const useVolumeToggleViewController = ({
  defaultValue = false,
  toggleCb = () => {},
}: IVolumeToggleViewControllerProps) => {
  const [mute, updateMute] = useState(defaultValue);
  const iconName = mute ? ICON_VOLUME_MUTE : ICON_VOLUME_UNMUTE;

  const toggleMute = () => {
    updateMute(!mute);
    toggleCb(!mute);
  };

  return {mute, toggleMute, iconName};
};

export default useVolumeToggleViewController;
