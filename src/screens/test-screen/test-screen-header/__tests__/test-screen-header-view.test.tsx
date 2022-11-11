import React from 'react';
import {waitFor, fireEvent} from '@testing-library/react-native';

import {render} from '@store/util/test.util';
import HeaderView from '../test-screen-header-view';

describe('test-screen-header-view', () => {
  test('test on click for sections', () => {
    const {getByTestId, getByText} = render(<HeaderView />, {
      preloadedState: {
        entities: {
          testExperience: {
            list: {
              responseData: {
                sections: [
                  {
                    section_name: {
                      en: 'xyz',
                      hi: 'xyz',
                    },
                    _id: 1,
                  },
                  {
                    section_name: {
                      en: 'abc',
                      hi: 'abc',
                    },
                    _id: 2,
                  },
                ],
              },
            },
          },
        },
      },
    });
    waitFor(() => {
      fireEvent.press(getByTestId('headerTopOnPress'));
      expect(getByText('xyz').props.children).toBe('xyz');
    });
  });
});
