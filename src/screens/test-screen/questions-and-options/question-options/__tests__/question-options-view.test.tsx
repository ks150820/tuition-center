import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {render} from '@store/util/test.util';
import OptionsView from '../question-options-view';

describe('options-view', () => {
  test('test Options view component for mcq', () => {
    const options = [
      {
        text: {
          en: 'Option 1',
          hi: 'Option 1',
        },
      },
    ];

    const props: IQuestionOptionProps = {
      optionType: 'mcq',
      options: options,
      inputValue: '123-',
      preSelectedMcq: 0,
      language: 'en',
      onOptionSelected: jest.fn(),
      onChangeText: jest.fn((e: string) => console.log(e)),
    };
    const {getAllByTestId} = render(<OptionsView {...props} />);

    fireEvent.press(getAllByTestId('clickMCQ')[0]);
    fireEvent.press(getAllByTestId('radioButton')[0]);
  });

  test('test Options view component for mcq when preSelectedMcq not match to the index of the mcq options', () => {
    const options = [
      {
        text: {
          en: 'Option 1',
          hi: 'Option 1',
        },
      },
    ];

    const props: IQuestionOptionProps = {
      optionType: 'mcq',
      options: options,
      inputValue: '123-',
      preSelectedMcq: 1,
      language: 'en',
      onOptionSelected: jest.fn(),
      onChangeText: jest.fn((e: string) => console.log(e)),
    };
    const {getAllByTestId} = render(<OptionsView {...props} />);

    fireEvent.press(getAllByTestId('clickMCQ')[0]);
    fireEvent.press(getAllByTestId('radioButton')[0]);
  });

  test('test Options view component for numeric', () => {
    const options = [
      {
        text: {
          en: 'Option 1',
          hi: 'Option 1',
        },
      },
    ];

    const props: IQuestionOptionProps = {
      optionType: 'numeric',
      options: options,
      inputValue: '123-',
      preSelectedMcq: 0,
      language: 'en',
      onOptionSelected: jest.fn(),
      onChangeText: jest.fn(),
    };
    const {getByTestId} = render(<OptionsView {...props} />);

    waitFor(() => {
      fireEvent.changeText(getByTestId('input'), '12345');
    });
  });

  //need to check again
  test('test Options view component for msq', () => {
    const options = [
      {
        text: {
          en: 'Option 1',
          hi: 'Option 1',
        },
      },
    ];

    const props: IQuestionOptionProps = {
      optionType: 'msq',
      options: options,
      inputValue: '123-',
      preSelectedMcq: 0,
      language: 'en',
      onOptionSelected: jest.fn(),
      onChangeText: jest.fn(),
    };
    const {getByTestId} = render(<OptionsView {...props} />);

    waitFor(() => {
      fireEvent.press(getByTestId('checkbox'));
      fireEvent(
        getByTestId('checkbox').children[0] as ReactTestInstance,
        'onValueChange',
        {
          nativeEvent: {value: true},
        },
      );
    });
  });

  test('test option component when switch case will not match any case', () => {
    const options = [
      {
        text: {
          en: 'Option 1',
          hi: 'Option 1',
        },
      },
    ];

    const props: IQuestionOptionProps = {
      optionType: '',
      options: options,
      inputValue: '123-',
      preSelectedMcq: 0,
      language: 'en',
      onOptionSelected: jest.fn(),
      onChangeText: jest.fn(),
    };
    const {} = render(<OptionsView {...props} />);
  });
});
