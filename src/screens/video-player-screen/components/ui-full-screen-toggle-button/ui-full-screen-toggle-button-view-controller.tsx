import {useState} from 'react';

interface IUIFullScreenToggleButtonViewControllerProps {
  defaultValue: boolean;
  fullScreenToggleCb: (value: boolean) => void;
}

/**
 * View Controller for UIFullScreenToggleButton
 * @param {IUIFullScreenToggleButtonViewControllerProps} props
 * @returns
 */
const useUIFullScreenToggleButtonViewController = ({
  defaultValue = false,
  fullScreenToggleCb = f => f,
}: IUIFullScreenToggleButtonViewControllerProps) => {
  const [isFullScreen, updateFullScreen] = useState(defaultValue);

  const toggleFullScreen = () => {
    const newStateVal = !isFullScreen;
    updateFullScreen(newStateVal);
    fullScreenToggleCb?.(newStateVal);
  };
  return {isFullScreen, toggleFullScreen};
};

export default useUIFullScreenToggleButtonViewController;
