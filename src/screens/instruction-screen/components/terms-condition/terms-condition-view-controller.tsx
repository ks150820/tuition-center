import {useState} from 'react';

interface ITermsConditionViewControllerProps {
  handleTermsData: (isCheck: boolean) => void;
}

interface ITermsConditionViewControllerReturn {
  handleTerms: (isCheck: boolean) => void;
}

type ITermsConditionViewControllerPropsType = (
  handleTermsData: ITermsConditionViewControllerProps,
) => ITermsConditionViewControllerReturn;

/**
 * View Controller for TermsCondition
 * @param {ITermsConditionViewControllerProps} params.handleTermsData to check/set the checkbox of terms and conditions
 * @returns
 */
const useTermsConditionViewController: ITermsConditionViewControllerPropsType =
  ({handleTermsData}) => {
    const [termsChecked, setTermsChecked] = useState<boolean>(false);

    /**
     * to handle the check uncheck of checkboxes
     * @param {boolean} params.isCheck condition for checkbox
     */
    const handleTerms = (isCheck: boolean) => {
      setTermsChecked(isCheck);
      handleTermsData?.(!termsChecked);
    };

    return {handleTerms};
  };

export default useTermsConditionViewController;
