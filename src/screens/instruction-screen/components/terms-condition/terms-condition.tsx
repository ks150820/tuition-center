import React from 'react';

import TermsConditionView from './terms-condition-view';
import useTermsConditionViewController from './terms-condition-view-controller';

type termsData = (isCheck: boolean) => void;
interface ITermsConditionProps {
  language: Language;
  handleTermsData: termsData;
}

/**
 * this component is basically used to display the terms and conditions
 * @param {Language} params.language selected language to get the terms and condition on the basis of language
 * @param {termsData} params.handleTermsData to check/set the checkbox of terms and conditions
 * @returns
 */
const TermsCondition: React.FunctionComponent<ITermsConditionProps> = ({
  language,
  handleTermsData,
}) => {
  const {handleTerms} = useTermsConditionViewController({
    handleTermsData,
  });

  return <TermsConditionView language={language} handleTerms={handleTerms} />;
};

export default TermsCondition;
