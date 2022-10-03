import React from 'react';

import {render} from '@test/test-utils';
import UILoaderView from '../ui-loader-view';

test('pass color, size and style to loader', () => {
  const {} = render(<UILoaderView color="#fff" size="large" />);
});

test('test no props is passed', () => {
  const {} = render(<UILoaderView />);
});
