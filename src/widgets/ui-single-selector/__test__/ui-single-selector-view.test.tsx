import React from 'react';
import {render} from '@testing-library/react-native';
import SingleSelectorView from '../ui-single-selector-view';

test('Single selector test cases', () => {
  // Mock event handler
  const handleChange = jest.fn();
  const handleBackPress = jest.fn();
  // Input data
  const options = [
    {key: '1', label: '1X', value: 1},
    {key: '2', label: '1.5X', value: 2},
    {key: '3', label: '2X', value: 3},
    {key: '4', label: '2.5X', value: 4},
    {key: '5', label: '3X', value: 5},
  ];

  // Render view
  const {getByText, getByTestId} = render(
    <SingleSelectorView
      options={options}
      selectedOption={options[0]}
      placeHolder="Playback Speed"
      onChange={handleChange}
      onBackPress={handleBackPress}
    />,
  );

  // Expect exact data length
  const optionList = getByTestId('optionList');
  expect(optionList.props.data.length).toEqual(options.length);

  // Expect exact value which we passed as prop
  const header = getByText('Playback Speed');
  expect(header.props.children).toEqual('Playback Speed');
});
