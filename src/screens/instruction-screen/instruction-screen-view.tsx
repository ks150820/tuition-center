import React from 'react';
import {ScrollView, View} from 'react-native';

import {COLORS} from '@resources/colors';
import {
  TXT_CHOOSE_YOUR_LANGUAGE,
  TXT_READY_TO_BEGIN,
  TXT_VIEW_IN,
} from '@screens/components/resources/strings/common';
import UIButton from '@widgets/ui-btn';
import UIDivider from '@widgets/ui-divider';
import UIDropDown from '@widgets/ui-drop-down';
import UILoader from '@widgets/ui-loader';
import GeneralInstructions from './components/general-instruction-component';
import SpecificInstruction from './components/specific-instruction';
import {styles} from './instruction-screen-style';
import TermsCondition from './components/terms-condition';

type emptyParamType = () => void;
type valueParameter = (value: optionNames) => void;
type termsDataType = (isCheck: boolean) => void;
type termsHandlerType = (name: string) => void;
interface IInstructionScreenViewProps {
  languages: optionNames[];
  isTermsChecked: boolean;
  showTestOptions: boolean;
  loader: boolean;
  showOption: boolean;
  testOption: string;
  optionsValue: string;
  instructionLanguage: Language;
  handleStartTest: emptyParamType;
  handleTermsData: termsDataType;
  handleShowOptions: emptyParamType;
  handleTestLanguage: valueParameter;
  handleTestShowOption: emptyParamType;
  handleOptionsValue: valueParameter;
  handleTerms: termsHandlerType;
}

/**
 * View for InstructionScreen
 * @param {boolean} params.loader boolean condition to show the loader
 * @param {optionNames[]} params.languages languages to select the terms and conditions language in hindi and english
 * @param {boolean} params.isTermsChecked to check the user either they accepted or not the terms and condition
 * @param {string} params.testOption selected option
 * @param {boolean} params.showOption to open the dropdown options
 * @param {string} params.optionsValue user selected option value
 * @param {boolean} params.showTestOptions to show the dropdown options
 * @param {Language} params.instructionLanguage this is user selected language to display the instruction on a particular language
 * @param {emptyParamType} params.handleStartTest callback method to start the test
 * @param {emptyParamType} params.handleShowOptions callback method to set the condition for dropdown options to display the options
 * @param {valueParameter} params.handleTestLanguage callback method to set the test language
 * @param {termsDataType} params.handleTermsData callback method to check/uncheck the terms and condition check box
 * @param {valueParameter} params.handleOptionsValue callback method to set the dropdown options data
 * @param {termsHandlerType} params.handleTerms
 * @param {valueParameter} params.handleTestShowOption callback to method to set the condition for options
 * @returns
 */
const InstructionScreenView: React.FunctionComponent<
  IInstructionScreenViewProps
> = ({
  loader,
  languages,
  isTermsChecked,
  testOption,
  showOption,
  optionsValue,
  showTestOptions,
  instructionLanguage,
  handleStartTest,
  handleShowOptions,
  handleTestLanguage,
  handleTermsData,
  handleOptionsValue,
  handleTestShowOption,
}) => {
  return (
    <View style={styles.mainLayout}>
      {loader && (
        <UILoader
          style={styles.loaderStyle}
          size="large"
          color={COLORS.BLUE.blue}
        />
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <UIDropDown
          layoutStyle={styles.layoutStyle}
          label={TXT_VIEW_IN}
          handleShowOptions={handleShowOptions}
          optionsValue={optionsValue}>
          {showOption && (
            <UIDropDown.Options
              option={languages}
              handleOptionValue={(value: optionNames) =>
                handleOptionsValue(value)
              }
            />
          )}
        </UIDropDown>
        <UIDivider />
        <GeneralInstructions language={instructionLanguage} />
        {/* <UIDivider /> */}
        <SpecificInstruction language={instructionLanguage} />
        {/* <UIDivider /> */}
        <View>
          <UIDropDown
            label={TXT_CHOOSE_YOUR_LANGUAGE}
            layoutStyle={styles.defaultLanguageStyle}
            handleShowOptions={handleTestShowOption}
            optionsValue={testOption}>
            {showTestOptions && (
              <UIDropDown.Options
                option={languages}
                handleOptionValue={(value: optionNames) =>
                  handleTestLanguage(value)
                }
              />
            )}
          </UIDropDown>
          <TermsCondition
            language={instructionLanguage}
            handleTermsData={value => handleTermsData(value)}
          />
        </View>
      </ScrollView>
      <UIButton
        buttonTitle={TXT_READY_TO_BEGIN}
        style={{
          textStyle: styles.buttonText,
          buttonStyle: styles.buttonStyle,
        }}
        disabled={!isTermsChecked}
        onClick={handleStartTest}
      />
    </View>
  );
};

export default InstructionScreenView;
