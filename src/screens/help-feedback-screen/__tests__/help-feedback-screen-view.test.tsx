import React from 'react';
import {fireEvent} from '@testing-library/react-native';

import HelpFeedBackScreenView from '../help-feedback-screen-view';
import {render} from '@test/test-utils';

describe('help-feedback-screen-view', () => {
  test('test the component when component name is feedback, basically for feedback section', () => {
    const {getByTestId} = render(
      <HelpFeedBackScreenView
        textAreaInput="This is for Feedback"
        componentName="Feedback"
        isOptionsOpen={false}
        selectedOption="App Crash"
        handleSelectedOption={jest.fn()}
        toggleDropdown={jest.fn()}
        handleChangeText={jest.fn()}
        handleFeedbackSubmit={jest.fn()}
        handleHelpSubmitButton={jest.fn()}
      />,
    );

    fireEvent.changeText(getByTestId('input'), 'This is for Feedback');
    fireEvent.press(getByTestId('uibutton'));
  });
  test('test the component when component name is help, basically for help section', () => {
    const {getByTestId, getAllByTestId} = render(
      <HelpFeedBackScreenView
        textAreaInput="This is for Help"
        componentName="Help"
        isOptionsOpen={true}
        selectedOption="App Crash"
        handleSelectedOption={jest.fn()}
        toggleDropdown={jest.fn()}
        handleChangeText={jest.fn()}
        handleFeedbackSubmit={jest.fn()}
        handleHelpSubmitButton={jest.fn()}
      />,
    );

    fireEvent.press(getByTestId('selectInputPress'));
    fireEvent.press(getAllByTestId('clickOption')[0]);
    fireEvent.changeText(getByTestId('input'), 'This is for Help');
    fireEvent.press(getByTestId('uibutton'));
  });
  test('test the component when component name is empty', () => {
    const {} = render(
      <HelpFeedBackScreenView
        textAreaInput="This is for Help"
        componentName=""
        isOptionsOpen={true}
        selectedOption="App Crash"
        handleSelectedOption={jest.fn()}
        toggleDropdown={jest.fn()}
        handleChangeText={jest.fn()}
        handleFeedbackSubmit={jest.fn()}
        handleHelpSubmitButton={jest.fn()}
      />,
    );
  });
});
