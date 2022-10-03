import React from 'react';
import {View} from 'react-native';
import useHtmlRenderer from '@services/html-renderer/html-renderer';
import UIDivider from '@widgets/ui-divider';

interface ISpecificInstructionViewProps {
  // language: string;
  testInstructions: string;
}

/**
 * View for SpecificInstruction
 * @param {string} params.testInstructions html instruction content to show the specific instruction
 * @returns
 */
const SpecificInstructionView: React.FunctionComponent<
  ISpecificInstructionViewProps
> = ({testInstructions}) => {
  return (
    <View>
      <UIDivider />
      {useHtmlRenderer({htmlContent: testInstructions, hasLatex: true})}
      <UIDivider />
    </View>
  );
};

export default SpecificInstructionView;
