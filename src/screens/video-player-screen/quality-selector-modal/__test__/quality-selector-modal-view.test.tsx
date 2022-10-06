import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {render} from '@store/util/test.util';
import QualitySelectorModalView from '../quality-selector-modal-view';

test('Quality selector test cases', () => {
  // Mock event handler
  const handleOnChange = jest.fn();
  const onHideModal = jest.fn();

  const options = [
    {
      key: '1',
      label: '1x',
      value: 1,
    },
    {
      key: '2',
      label: '2x',
      value: 2,
    },
  ];

  // Render view
  const {getByText} = render(
    <QualitySelectorModalView
      isVisible={true}
      options={options}
      selectedOption={options[0]}
      handleOnChange={handleOnChange}
      onHideModal={onHideModal}
    />,
  );

  // Verify function callback by firing press event programmatically
  const cancelBtn = getByText('Cancel');
  fireEvent.press(cancelBtn);
  expect(onHideModal).toBeCalled();

  // Verify function callback by firing press event programmatically
  const selectBtn = getByText('Select');
  fireEvent.press(selectBtn);
  expect(handleOnChange).toBeCalled();
});
