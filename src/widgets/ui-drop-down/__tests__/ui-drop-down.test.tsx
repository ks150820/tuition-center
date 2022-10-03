import {fireEvent, waitFor} from '@testing-library/react-native';
import React from 'react';
import {render} from '@test/test-utils';

import UIDropDown from '../ui-drop-down';

describe('ui-drop-down', () => {
  const dropdownProps = {
    label: 'select',
    handleShowOptions: jest.fn(),
    optionsValue: 'Ireland',
  };
  const optionProps = {
    option: [
      {
        name: 'Hindi',
        id: 'hi',
      },
    ],
    handleOptionValue: jest.fn(),
    value: 'Hindi',
  };
  test('calling the dropdown method to open the options', () => {
    const {getByTestId, getAllByTestId} = render(
      <UIDropDown {...dropdownProps}>
        <UIDropDown.Options {...optionProps} />
      </UIDropDown>,
    );

    waitFor(() => {
      fireEvent.press(getByTestId('selectInputPress'));
      fireEvent.press(getAllByTestId('clickOption')[0]);
      expect(dropdownProps.handleShowOptions).toHaveBeenCalledTimes(1);
    });
  });
  test('test component when optionValue is not passing', () => {
    const props = {
      label: 'select',
      handleShowOptions: jest.fn(),
      optionsValue: '',
    };
    const {getByTestId, getAllByTestId} = render(
      <UIDropDown {...props}>
        <UIDropDown.Options {...optionProps} />
      </UIDropDown>,
    );

    waitFor(() => {
      fireEvent.press(getByTestId('selectInputPress'));
      fireEvent.press(getAllByTestId('clickOption')[0]);
      expect(dropdownProps.handleShowOptions).toHaveBeenCalledTimes(1);
    });
  });
});
