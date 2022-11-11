import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SingleSelectOptionView from '../ui-single-select-option-view';

test('Single select option test cases', () => {
  const handleSelectOption = jest.fn();
  // Render view
  const {getByText, getByTestId} = render(
    <SingleSelectOptionView
      option={{key: '1', label: '1X', value: 1}}
      isSelected={true}
      onSelectOption={handleSelectOption}
    />,
  );

  // Expect value based on we passed as prop
  const selectIcon = getByTestId('selectIcon');
  expect(selectIcon.props.disabled).toEqual(false);

  // Expect exact value which we passed as prop
  const label = getByText('1X');
  expect(label.props.children).toEqual('1X');

  // Verify callback by programmatically firing press event
  const optionClickHandler = getByTestId('optionClickHandler');
  fireEvent.press(optionClickHandler);
  expect(handleSelectOption).toBeCalled();
});
