import React from 'react';

import HelpFeedBackScreenView from './help-feedback-screen-view';
import useHelpFeedbackScreenController from './help-feedback-screen-controller';

interface IHelpFeedbackScreenProps extends feedbackScreenProps {
  navigation: any;
  route: any;
}

/**
 * returns the ui of help and feedback component
 */
const HelpFeedbackScreen = ({navigation, route}: IHelpFeedbackScreenProps) => {
  const CONTROLLER = useHelpFeedbackScreenController(navigation, route);
  return (
    <HelpFeedBackScreenView
      textAreaInput={CONTROLLER.feedbackInput}
      handleChangeText={CONTROLLER.handleChangeText}
      componentName={CONTROLLER.componentName}
      toggleDropdown={CONTROLLER.toggleDropdown}
      isOptionsOpen={CONTROLLER.isOptionsOpen}
      handleSelectedOption={CONTROLLER.handleSelectedOption}
      selectedOption={CONTROLLER.selectedOption}
      handleFeedbackSubmit={CONTROLLER.handleFeedbackSubmitButton}
      handleHelpSubmitButton={CONTROLLER.handleHelpSubmitButton}
    />
  );
};

export default HelpFeedbackScreen;
