/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {View, Pressable} from 'react-native';

import UIRadioButton from '@widgets/ui-radio-button';
import UICheckbox from '@widgets/ui-checkbox';
import UIInput from '@widgets/ui-input';
import useHtmlRenderer from '@services/html-renderer/html-renderer';
import {optionStyle} from './question-options-style';

/**
 *
 * @param {option[]} params.options array of questions options
 * @param {String} params.optionType type of option - mcq/msq/numerical
 * @param {string} params.inputValue this is numeric input value - this will used in optionType is numerical
 * @param {number} params.preSelectedMcq this is the array of answer which was already selected by the user - using this radio state is updating
 * @param {Language} params.language the language selected by the in which language user want to see the options
 * @param {optionsSelectedType} params.onOptionSelected a callback method to set the users mcq answer
 * @param {numberPadClickType} params.onNumberPadClick a callback method use to set the numerical input box numbers
 * @returns
 */
const OptionsView: React.FC<IQuestionOptionProps> = ({
  options,
  optionType,
  inputValue,
  preSelectedMcq,
  language,
  onOptionSelected,
  onChangeText,
}) => {
  const msqRenderer = () => {
    return options?.map((item: option, index: number) => {
      return (
        <Pressable key={index}>
          <View
            key={index}
            style={[
              optionStyle?.commonComponent,
              optionStyle?.checkboxComponent,
            ]}>
            <UICheckbox label="" name="option" onSelect={() => {}} />
            {useHtmlRenderer({
              htmlContent: item?.text[language],
              hasLatex: true,
            })}
          </View>
        </Pressable>
      );
    });
  };

  const mcqRenderer = () => (
    <View>
      {options?.map((item: option, index: number) => {
        return (
          <Pressable
            onPress={() => onOptionSelected(index)}
            key={index}
            testID="clickMCQ">
            <View
              style={[optionStyle?.commonComponent, optionStyle?.component]}>
              <UIRadioButton
                isChecked={index === preSelectedMcq ? true : false}
                onPress={() => onOptionSelected(index)}
              />
              {useHtmlRenderer({
                htmlContent: item?.text[language],
                hasLatex: true,
              })}
            </View>
          </Pressable>
        );
      })}
    </View>
  );

  const numericComponentRenderer = () => (
    <UIInput
      placeholder="Enter your Answer"
      onChangeText={onChangeText}
      keyboardType="number-pad"
      inputValue={inputValue}
    />
  );

  const optionComponent = () => {
    switch (optionType) {
      case 'mcq':
        return mcqRenderer();
      case 'msq':
        return msqRenderer();
      case 'numeric':
        return numericComponentRenderer();
      default:
        return <></>;
    }
  };

  return <View style={optionStyle?.outerComponent}>{optionComponent()}</View>;
};

export default OptionsView;
