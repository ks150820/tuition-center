import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import AuthScreenView from '../auth-screen-view';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
describe('testing home screen view', () => {
  test('', () => {
    const {getByText} = render(<AuthScreenView />);
    fireEvent.press(getByText('Login'));
  });
});
