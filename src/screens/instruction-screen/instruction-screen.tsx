import React from 'react';
import InstructionScreenView from './instruction-screen-view';
import useInstructionScreenViewController from './instruction-screen-view-controller';

interface IInstructionScreenProps extends testExperienceScreenProps {
  navigation: any;
}

/**
 * this component is used to display the all instructions
 * @returns
 */
const InstructionScreen = ({navigation}: IInstructionScreenProps) => {
  const {
    loader,
    isTermsChecked,
    languages,
    showOptions,
    showTestOptions,
    optionsValue,
    testOption,
    instructionLanguage,
    handleStartTest,
    handleTerms,
    handleTestShowOption,
    handleShowOptions,
    handleTermsData,
    handleTestLanguage,
    handleOptionValue,
  } = useInstructionScreenViewController({navigation});

  return (
    <InstructionScreenView
      languages={languages}
      loader={loader}
      isTermsChecked={isTermsChecked}
      handleShowOptions={handleShowOptions}
      handleOptionsValue={handleOptionValue}
      handleTerms={handleTerms}
      showTestOptions={showTestOptions}
      testOption={testOption}
      handleStartTest={handleStartTest}
      handleTermsData={handleTermsData}
      showOption={showOptions}
      handleTestShowOption={handleTestShowOption}
      handleTestLanguage={handleTestLanguage}
      optionsValue={optionsValue}
      instructionLanguage={instructionLanguage}
    />
  );
};

export default InstructionScreen;
