import React from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';

import {style} from './help-feedback-screen-style';
import UIInput from '@widgets/ui-input';
import UIButton from '@widgets/ui-btn';
import UIDropDown from '@widgets/ui-drop-down';
import {COLORS} from '@resources/colors';

type emptyFunctionParamType = () => void;
interface IFeedbackScreenViewProps {
  textAreaInput: string;
  componentName: string | undefined;
  isOptionsOpen: boolean;
  selectedOption: string;
  handleSelectedOption: (item: any) => void;
  toggleDropdown: emptyFunctionParamType;
  handleChangeText: (textInput: string) => void;
  handleFeedbackSubmit: emptyFunctionParamType;
  handleHelpSubmitButton: emptyFunctionParamType;
}

const options = [
  {
    name: 'App Crashing',
    id: '1',
  },
  {
    name: 'Exam Guidance',
    id: '2',
  },
];

/**
 * returns the ui of help and feedback component
 * @param {string} params.textAreaInput this is text of feedback text area
 * @param {string | undefined} params.componentName this is selected components between "help" and "Feedback" component
 * @param {boolean} params.isOptionsOpen this know to whether dropdown option is opened or not
 * @param {string} params.selectedOption the user selected options
 * @param {} params.handleSelectedOption callback method to set the selected option
 * @param {emptyFunctionParamType} params.toggleDropdown callback method to  open the dropdown
 * @param {} params.handleChangeText callback method to set the text of feedback and help user comments
 * @param {emptyFunctionParamType} params.handleFeedbackSubmit callback method to submit feedback comment
 * @param {emptyFunctionParamType} params.handleHelpSubmitButtoncallback method to submit help comment
 * @returns
 */
const HelpFeedBackScreenView = ({
  textAreaInput,
  componentName,
  isOptionsOpen,
  selectedOption,
  handleSelectedOption,
  toggleDropdown,
  handleChangeText,
  handleFeedbackSubmit,
  handleHelpSubmitButton,
}: IFeedbackScreenViewProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.component}>
        <View>
          <Text style={style.title}>{componentName || 'Feedback'}</Text>
        </View>
        {componentName === 'Help' && (
          <View>
            <UIDropDown
              label=""
              optionsValue={selectedOption || 'Select issue'}
              dropDownStyle={style.dropdownStyle}
              handleShowOptions={toggleDropdown}>
              {isOptionsOpen && (
                <UIDropDown.Options
                  option={options}
                  handleOptionValue={(item: object) =>
                    handleSelectedOption(item)
                  }
                />
              )}
            </UIDropDown>
          </View>
        )}
        <View>
          <UIInput
            placeholder="Write about the problem"
            keyboardType="default"
            onChangeText={handleChangeText}
            style={style.textArea}
            inputValue={textAreaInput}
            multiline={true}
            numberOfLines={10}
            editable={true}
          />
        </View>
        <View>
          <UIButton
            btnText={componentName === 'Help' ? 'Submit Issue' : 'Submit'}
            styles={{
              btnElementWrapper: style.buttonStyle,
              outerWrapper: style.buttonComponentStyle,
            }}
            color={COLORS.WHITE.white}
            size={16}
            onPress={
              componentName === 'Help'
                ? handleHelpSubmitButton
                : handleFeedbackSubmit
            }
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HelpFeedBackScreenView;
