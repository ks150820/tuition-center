import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import HomescreenView from '../homescreen-view';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('render home screen view', () => {
  test('test component', () => {
    const {getByText} = render(<HomescreenView />);
    fireEvent.press(getByText('Click Me'));
  });
});
