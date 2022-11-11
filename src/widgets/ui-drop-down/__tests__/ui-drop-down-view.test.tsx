import {fireEvent, waitFor} from '@testing-library/react-native';
import React from 'react';
import {render} from '@store/util/test.util';

import UIDropDownView from '../ui-drop-down-view';

describe('ui-drop-down-view', () => {
  const props = {
    label: 'select',
    handleShowOptions: jest.fn(),
    optionsValue: 'ireland',
  };
  const optionsProps = {
    option: [
      {
        name: 'English',
        id: 'en',
      },
    ],
    handleOptionValue: jest.fn(),
  };

  test('calling the handleShowOptions method to open the options', () => {
    const {getByTestId} = render(
      <UIDropDownView {...props}>
        <UIDropDownView.Options {...optionsProps} />
      </UIDropDownView>,
    );

    waitFor(() => {
      fireEvent.press(getByTestId('selectInputPress'));
      expect(props.handleShowOptions).toHaveBeenCalledTimes(1);
    });
  });

  test('calling the handleOptionValue function to set the option value', () => {
    const {getByTestId} = render(
      <UIDropDownView {...props}>
        <UIDropDownView.Options {...optionsProps} />
      </UIDropDownView>,
    );

    waitFor(() => {
      fireEvent.press(getByTestId('clickOption'));
      expect(optionsProps.handleOptionValue).toHaveBeenCalledTimes(1);
    });
  });

  test('test when option is not passed yet', () => {
    const emptyProps = {
      label: 'select',
      handleShowOptions: jest.fn(),
      optionsValue: '',
    };
    const {getByTestId} = render(
      <UIDropDownView {...emptyProps}>
        <UIDropDownView.Options {...optionsProps} />
      </UIDropDownView>,
    );

    waitFor(() => {
      fireEvent.press(getByTestId('clickOption'));
      expect(optionsProps.handleOptionValue).toHaveBeenCalledTimes(1);
    });
  });
});
