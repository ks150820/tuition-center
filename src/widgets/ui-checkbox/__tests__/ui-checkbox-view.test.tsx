import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {render} from '@test/test-utils';
import UICheckboxView from '../ui-checkbox-view';

describe('ui-checkbox-view', () => {
  test('test when label is passed', () => {
    const {getByTestId} = render(
      <UICheckboxView
        label="UICheckBox"
        name="test checkbox"
        isClicked={true}
        handleCheckbox={jest.fn()}
      />,
    );

    fireEvent(
      getByTestId('checkbox').children[0] as ReactTestInstance,
      'onValueChange',
      {nativeEvent: {value: true}},
    );
  });

  test('test when label is not passed and check the call the onValueChanged library method', () => {
    const {getByTestId} = render(
      <UICheckboxView
        name="test checkbox"
        isClicked={true}
        handleCheckbox={jest.fn()}
      />,
    );

    fireEvent(
      getByTestId('checkbox').children[0] as ReactTestInstance,
      'onValueChange',
      {nativeEvent: {value: true}},
    );
  });
});
