import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from 'react-native';
import UIRowView from '../ui-row-view';

test('Row container test cases', () => {
  // Render view
  const {getByTestId} = render(
    <UIRowView>
      <Text testID="textView">Sample data</Text>
    </UIRowView>,
  );

  // Expect exact value which we passed as prop
  const textView = getByTestId('textView');
  expect(textView.props.children).toEqual('Sample data');
});
