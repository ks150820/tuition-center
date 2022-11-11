import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import useNavigator from '@navigate/common/navigation';\
import {
  TXT_EN,
  TXT_HI,
  TXT_HINDI,
} from '@screens/components/resources/strings/common';
import {
  getLoaderValue,
  updateTestLanguage,
} from '@store/entities/test-experience';
import {LANGUAGE_OPTION} from './resources/constants/language-option-constants';

interface IInstructionScreenViewControllerProps {
  navigation: any;
}

/**
 * View Controller for InstructionScreen
 * @param props
 * @returns
 */
const useInstructionScreenViewController = ({
  navigation,
}: IInstructionScreenViewControllerProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [showTestOptions, setTestShowOptions] = useState<boolean>(false);

  const [optionsValue, setOptionsValue] = useState<string>('');
  const [testOption, setTestOption] = useState<string>(TXT_HINDI);

  const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);
  const [testLanguage, setTestLanguage] = useState<Language>(TXT_HI);
  const [instructionLanguage, setInstructionLanguage] =
    useState<Language>(TXT_EN);
  const loader = useSelector(getLoaderValue);

  // const navigation = useNavigation<testExperienceScreenProps>();
  const dispatch = useDispatch<Dispatch>();

  const languages: optionNames[] = LANGUAGE_OPTION;

  useEffect(() => {
    if (optionsValue !== TXT_HINDI) {
      setInstructionLanguage(TXT_EN);
    } else {
      setInstructionLanguage(TXT_HI);
    }
  }, [optionsValue]);

  useEffect(() => {
    if (testOption !== TXT_HINDI) {
      setTestLanguage(TXT_EN);
    } else {
      setTestLanguage(TXT_HI);
    }
  }, [testOption]);

  const handleTestShowOption = (): void => {
    setTestShowOptions(!showTestOptions);
  };

  const handleShowOptions = (): void => {
    setShowOptions(!showOptions);
  };

  /**
   * to check/ uncheck of terms and conditions
   * @param {boolean} isCheck get the condition
   */
  const handleTermsData = (isCheck: boolean): void => {
    setIsTermsChecked(isCheck);
  };

  /**
   * to change the language for instructions
   * @param {optionNames} value dropdown option value
   */
  const handleOptionValue = (value: optionNames): void => {
    setOptionsValue(value?.name);
    setInstructionLanguage(value.id as Language);
    setShowOptions(false);
  };

  /**
   * to change the language for test
   * @param {optionNames} value dropdown option value
   */
  const handleTestLanguage = (value: optionNames): void => {
    setTestOption(value.name);
    setTestShowOptions(false);
    dispatch(updateTestLanguage(value.id as Language));
  };

  /**
   * navigating to test taking screen on click of start test
   */
  const handleStartTest = (): void => {
    navigation.navigate('TestExperience');
  };

  const handleTerms = (): void => {
    // console.log(e, 'event Handle name');
  };
  return {
    loader,
    languages,
    isTermsChecked,
    showOptions,
    showTestOptions,
    optionsValue,
    testOption,
    testLanguage,
    instructionLanguage,
    handleStartTest,
    handleShowOptions,
    handleTestShowOption,
    handleOptionValue,
    handleTestLanguage,
    handleTerms,
    handleTermsData,
  };
};

export default useInstructionScreenViewController;
