import {ElasticService} from '@services/elastic-service';
import {useState} from 'react';

interface IUseFeedbackScreenControllerReturnType {
  feedbackInput: string;
  componentName: string | undefined;
  isOptionsOpen: boolean;
  selectedOption: string;
  handleSelectedOption: (item: any) => void;
  toggleDropdown: () => void;
  handleChangeText: (inputEvent: string) => void;
  handleFeedbackSubmitButton: () => void;
  handleHelpSubmitButton: () => void;
}

type optionItemType = {
  name: string;
  id: string;
};

type IUseFeedbackScreenController = (
  navigation: any,
  route: any,
) => IUseFeedbackScreenControllerReturnType;

const useHelpFeedbackScreenController: IUseFeedbackScreenController = (
  navigation,
  route,
) => {
  const [feedbackInput, setFeedbackInput] = useState<string>(''); // used to set the feedback and help comment
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false); // to open and close the dropdown option
  const [selectedOption, setSelectedOption] = useState<string>(''); // user selected option

  /**
   * to get the component route name like Feedback , help
   */
  const componentName = route.params?.componentName;

  // const navigate = useNavigator();

  /**
   * to set the user comment
   */
  const handleChangeText = (inputEvent: string): void => {
    setFeedbackInput(inputEvent);
  };

  /**
   * used to close or open the dropdown
   */
  const toggleDropdown = (): void => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  /**
   * this method used to set the selected option
   * @param item this is selected option name and id
   */
  const handleSelectedOption = (item: optionItemType) => {
    setSelectedOption(item.name);
    toggleDropdown();
  };

  /**
   * this method used when user press feedback screen submit button
   */
  const handleFeedbackSubmitButton = (): void => {
    const options = {
      type: 'feedback',
      message: feedbackInput,
    };
    ElasticService(options);
    navigation.navigate('Home');
  };

  /**
   * this method used when user press help screen submit button
   */
  const handleHelpSubmitButton = (): void => {
    const options = {
      type: 'feedback',
      issue_type: selectedOption,
      page: 'help',
      category: 'HELP',
      message: feedbackInput,
    };
    ElasticService(options);
    navigation.navigate('Home');
  };

  return {
    feedbackInput,
    componentName,
    isOptionsOpen,
    selectedOption,
    handleSelectedOption,
    handleChangeText,
    toggleDropdown,
    handleFeedbackSubmitButton,
    handleHelpSubmitButton,
  };
};

export default useHelpFeedbackScreenController;
