import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getTestInstructions} from '@store/entities/test-experience';

interface ISpecificInstructionViewControllerProps {
  language: string;
}

interface ISpecificInstructionViewControllerReturnType {
  testInstructions: string;
}

type ISpecificInstructionViewControllerType = (
  language: ISpecificInstructionViewControllerProps,
) => ISpecificInstructionViewControllerReturnType;

/**
 * View Controller for SpecificInstruction
 * @param {string} params.language to select the specific instruction according to selected language
 * @returns
 */

const useSpecificInstructionViewController: ISpecificInstructionViewControllerType =
  ({language}) => {
    const [testInstructions, setTestInstructions] = useState<string>('');

    const specificInstruction = useSelector(getTestInstructions);

    useEffect(() => {
      if (!language) {
        setTestInstructions(specificInstruction['en']);
      } else {
        setTestInstructions(specificInstruction[language]);
      }
    }, [specificInstruction, language]);

    return {
      testInstructions,
    };
  };

export default useSpecificInstructionViewController;
