import React from 'react';
import {render} from '@store/util/test.util';
import UIMoreOptionBtn from '../ui-more-option-btn';

test('More option button test cases', () => {
  const testID = 'moreOptionTest';

  // Render view
  const {getByTestId} = render(
    <UIMoreOptionBtn color="red" onPress={jest.fn()} testID={testID} />,
  );

  // Expect exact value which we passed as prop
  const moreOptionBtn = getByTestId(testID);
  expect(moreOptionBtn.props.children[0].props.children.props.color).toBe(
    'red',
  );
});
