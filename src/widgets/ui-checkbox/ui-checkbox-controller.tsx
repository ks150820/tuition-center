import {useState} from 'react';
interface IUICheckboxViewControllerProps {
  isClicked: boolean;
  handleCheckbox: any;
}

interface onSelectType {
  onSelect: (name: string, isClicked: boolean) => void;
}

type IUICheckBoxController = (
  onSelect: onSelectType,
) => IUICheckboxViewControllerProps;

/**
 *
 * @param {onSelectType} params.onSelect this is used to set the checkbox name and its boolean condition
 * @returns {isClicked, handleCheckbox}
 */
const useUICheckboxController: IUICheckBoxController = ({
  onSelect,
}: onSelectType) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  /**
   *
   * @param {string} name this method is to update the state of checkbox with respect to their name and is used to call the callback onSelect method to pass the checkbox condition and its name
   */
  const handleCheckbox = (name: string) => {
    setIsClicked(!isClicked);
    onSelect?.(name, !isClicked);
  };
  return {isClicked, handleCheckbox};
};

export default useUICheckboxController;
