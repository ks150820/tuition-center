import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {render} from '@store/util/test.util';
import InstructionScreenView from '@screens/instruction-screen/instruction-screen-view';

describe('instruction-screen-view', () => {
  test('test for dropdown, checkbox and begin test button', () => {
    const props = {
      loader: false,
      languages: [
        {
          name: 'English',
          id: 'en',
        },
        {
          name: 'Hindi',
          id: 'hi',
        },
      ],
      isTermsChecked: true,
      testOption: 'English',
      showOption: true,
      optionsValue: 'Hindi',
      showTestOptions: true,
      handleStartTest: jest.fn(),
      handleShowOptions: jest.fn(),
      handleTestLanguage: jest.fn(),
      handleTestShowOption: jest.fn(),
      handleOptionsValue: jest.fn(),
      handleTerms: jest.fn(),
      handleTermsData: jest.fn(),
    };
    const {getByTestId, getAllByTestId} = render(
      <InstructionScreenView instructionLanguage="en" {...props} />,
    );

    fireEvent(
      getByTestId('checkbox').children[0] as ReactTestInstance,
      'onValueChange',
      {nativeEvent: {value: true}},
    );
    fireEvent.press(getAllByTestId('selectInputPress')[0]);
    fireEvent.press(getAllByTestId('clickOption')[0]);
    fireEvent.press(getAllByTestId('selectInputPress')[1]);
    fireEvent.press(getAllByTestId('clickOption')[2]);
    fireEvent.press(getByTestId('uibutton'));
  });

  test('test component when loader is true', () => {
    const props = {
      loader: true,
      languages: [
        {
          name: 'English',
          id: 'en',
        },
        {
          name: 'Hindi',
          id: 'hi',
        },
      ],
      isTermsChecked: true,
      testOption: 'English',
      showOption: true,
      optionsValue: 'Hindi',
      showTestOptions: true,
      handleStartTest: jest.fn(),
      handleShowOptions: jest.fn(),
      handleTestLanguage: jest.fn(),
      handleTestShowOption: jest.fn(),
      handleOptionsValue: jest.fn(),
      handleTerms: jest.fn(),
      handleTermsData: jest.fn(),
    };
    const {getByTestId, getAllByTestId} = render(
      <InstructionScreenView instructionLanguage="en" {...props} />,
    );
    fireEvent.press(getAllByTestId('selectInputPress')[0]);
    fireEvent.press(getAllByTestId('clickOption')[0]);
    fireEvent.press(getAllByTestId('selectInputPress')[1]);
    fireEvent.press(getAllByTestId('clickOption')[2]);
    fireEvent.press(getByTestId('uibutton'));
  });
});
