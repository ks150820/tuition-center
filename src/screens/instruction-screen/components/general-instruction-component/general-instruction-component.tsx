import React from 'react';

import GeneralInstructionsView from './general-instructions-component-view';

interface IGeneralInstructionsProps {
  language: string;
}

/**
 * View for GeneralInstructions
 * @param {string} params.language to select the instruction on the basis of selected language
 * @returns
 */
const GeneralInstructions = ({language}: IGeneralInstructionsProps) => {
  return <GeneralInstructionsView language={language} />;
};

export default GeneralInstructions;
