import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {render} from '@store/util/test.util';
import TermsConditionView from '../terms-condition-view';

describe('terms-condition-view', () => {
  test('test while try to click the checkbox', () => {
    const props = {
      handleTerms: jest.fn(),
    };
    const {getByTestId} = render(
      <TermsConditionView language="en" {...props} />,
    );

    fireEvent.changeText(getByTestId('checkbox'));
    fireEvent(
      getByTestId('checkbox').children[0] as ReactTestInstance,
      'onValueChange',
      {nativeEvent: {value: true}},
    );
  });
});
