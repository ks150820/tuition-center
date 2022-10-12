import React from 'react';
import SpecificInstructionView from './specific-instruction-view';
import useSpecificInstructionViewController from './specific-instruction-view-controller';

interface ISpecificInstructionProps {
  language: string;
}

/**
 * This component is used to display the specific instruction
 * @param {string} params.language to show the selected language specific instructions
 * @returns
 */
const SpecificInstruction: React.FunctionComponent<
  ISpecificInstructionProps
> = ({language}) => {
  const {testInstructions} = useSpecificInstructionViewController({
    language,
  });

  return <SpecificInstructionView testInstructions={testInstructions} />;
};

export default SpecificInstruction;
