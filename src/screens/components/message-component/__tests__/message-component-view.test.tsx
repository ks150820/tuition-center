import React from 'react';
import {render} from '@store/util/test.util';

import MessageComponentView from '../message-component-view';

describe('message-component-view', () => {
  test('test flatlist when userId is different', () => {
    const props = {
      userMessage: [
        {
          userId: '123',
          name: 'exampur',
          message: 'testing',
          timestamp: '12344555',
        },
      ],
      flatListRef: {current: jest.fn()},
      isLoading: false,
      userId: '1234',
      getTimeFromDate: jest.fn(),
      loadMore: jest.fn(),
    };
    const {} = render(<MessageComponentView {...props} />);
  });
  test('test flatlist when userId is different with previous id', () => {
    const props = {
      userMessage: [
        {
          userId: '123',
          name: 'exampur',
          message: 'testing',
          timestamp: '12344555',
        },
        {
          userId: '1235',
          name: 'exampur',
          message: 'testing',
          timestamp: '12344555',
        },
      ],
      flatListRef: {current: jest.fn()},
      isLoading: false,
      userId: '1234',
      getTimeFromDate: jest.fn(),
      loadMore: jest.fn(),
    };
    const {} = render(<MessageComponentView {...props} />);
  });
  test('test flatlist when userId is same', () => {
    const props = {
      userMessage: [
        {
          userId: '1234',
          name: 'exampur',
          message: 'testing',
          timestamp: '12344555',
        },
      ],
      flatListRef: {current: jest.fn()},
      userId: '1234',
      isLoading: false,
      getTimeFromDate: jest.fn(),
      loadMore: jest.fn(),
    };
    const {} = render(<MessageComponentView {...props} />);
  });
});
