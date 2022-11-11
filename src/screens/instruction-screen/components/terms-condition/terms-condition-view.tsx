import React from 'react';
import {View} from 'react-native';
import useHtmlRenderer from '@services/html-renderer/html-renderer';
import UICheckbox from '@widgets/ui-checkbox';
import {EXAM_TERMS_AND_CONDITIONS} from '@screens/instruction-screen/resources/strings/terms-and-conditions';

type functionType = (isClick: boolean) => void;
interface ITermsConditionViewProps {
  language: Language;
  handleTerms: functionType;
}

/**
 * View for TermsCondition
 * @param {Language} params.language instruction language
 * @param {functionType} params.handleTerms call back method to set checkbox checked and un-checked condition
 * @returns
 */
const TermsConditionView: React.FunctionComponent<ITermsConditionViewProps> = ({
  language,
  handleTerms,
}) => {
  return (
    <View>
      <UICheckbox
        label="Terms and Condition"
        name="terms"
        onSelect={(_name: string, isClick: boolean) => handleTerms(isClick)}
      />
      {useHtmlRenderer({
        htmlContent: EXAM_TERMS_AND_CONDITIONS.termsAndConditions[language],
        hasLatex: true,
      })}
    </View>
  );
};

export default TermsConditionView;
