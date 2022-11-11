import React from 'react';
import {render} from '@store/util/test.util';

import TimerView from '@components/test-timer/timer-view';

describe('timer-view', () => {
  test('test component when timeSpentStatus is false', () => {
    const props = {
      timer: '00',
      timeSpentStatus: false,
      timeUpColor: '',
    };
    const {getByText} = render(<TimerView {...props} />);

    expect(getByText('00').props.children).toBe('00');
  });

  test('test component when timeSpentStatus is true', () => {
    const props = {
      timer: '00',
      timeSpentStatus: true,
      timeUpColor: '',
    };
    const {getByText} = render(<TimerView {...props} />);

    expect(getByText('- 00').props.children).toBe('- 00');
  });
});
