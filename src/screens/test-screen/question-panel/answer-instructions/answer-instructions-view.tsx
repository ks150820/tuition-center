import React from 'react';
import {View, Text, FlatList} from 'react-native';

import UIDropDown from '@widgets/ui-drop-down';
import {answerInstructionStyle} from './answer-instruction-style';
import AnswerStatus from './components/answer-status';

type optionHandlerType = () => void;
type optionsValueHandlerType = (value: optionNames) => void;

interface IAnswerInstructionsViewProps {
  questionType: string;
  languages: optionNames[];
  optionsValue: string;
  showOption: boolean;
  test_status: IAnswerStatus[];
  toggleOptions: optionHandlerType;
  handleOptionsValue: optionsValueHandlerType;
}

/**
 *
 * @param {string} params.questionType to display the types of question ,e.g mcq - Multiple Choice Questions
 * @param {optionNames[]} params.languages use in language dropdown to set the test language
 * @param {string} params.optionsValue dropdown options labels
 * @param {boolean} params.showOption boolean value to display the dropdown options
 * @param {answerStatus[]} params.test_status get all the test status, like how questions has answered by user and how many marked and review etc.
 * @param {optionHandlerType} params.toggleOptions callback method use to set the state for dropdown to display the dropdown options
 * @param {optionsValueHandlerType} params.handleOptionsValue call back method to set the dropdown option values
 * @returns model for user test status, in this user can change the language see the type of questions and how many answers has user given , how many answers user marked for review and unanswered all the things they can check here
 */
const AnswerInstructionsView: React.FC<IAnswerInstructionsViewProps> = ({
  questionType,
  languages,
  optionsValue,
  showOption,
  test_status,
  toggleOptions,
  handleOptionsValue,
}) => {
  const renderItem = (item: IAnswerStatus) => {
    return (
      <AnswerStatus
        text={item?.text}
        number={item?.number}
        bgColor={item?.bgColor}
        textColor={item?.textColor}
      />
    );
  };

  return (
    <View style={answerInstructionStyle?.component}>
      {questionType && (
        <View>
          <Text style={answerInstructionStyle?.textColor}>Question Type:</Text>
          <Text
            style={[
              answerInstructionStyle?.textColor,
              answerInstructionStyle?.textStyle,
            ]}>
            {questionType}
          </Text>
        </View>
      )}
      {/* language dropdown */}
      <View style={answerInstructionStyle?.dropdownComponent}>
        <UIDropDown
          layoutStyle={answerInstructionStyle.layoutStyle}
          label="View in :"
          handleShowOptions={toggleOptions}
          optionsValue={optionsValue}>
          {showOption && (
            <UIDropDown.Options
              option={languages}
              handleOptionValue={(value: optionNames) =>
                handleOptionsValue(value)
              }
            />
          )}
        </UIDropDown>
      </View>
      {/* to show all the user given test status */}
      <FlatList
        keyExtractor={(_item, index) => index + ''}
        data={test_status}
        renderItem={({item}: {item: IAnswerStatus}) => renderItem(item)}
      />
    </View>
  );
};

export default AnswerInstructionsView;
