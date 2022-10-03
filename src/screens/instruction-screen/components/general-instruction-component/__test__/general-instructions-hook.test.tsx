import React from 'react';

import {render} from '@store/util/test.util';
import GeneralInstructionsView from '../general-instructions-component-view';

test('test general instruction component when language in en', () => {
  const {getByText} = render(<GeneralInstructionsView language="en" />);

  expect(getByText(/General Instructions:/i).props.children).toContain(
    'General Instructions',
  );
});

test('test general instruction component for hi', () => {
  const {getByText} = render(<GeneralInstructionsView language="hi" />);

  expect(
    getByText(/कृपया निम्नलिखित निर्देशों को ध्यान से पढ़ें सामान्य अनुदेश:/i)
      .props.children,
  ).toContain('कृपया निम्नलिखित निर्देशों को ध्यान से पढ़ें सामान्य अनुदेश:');
});
