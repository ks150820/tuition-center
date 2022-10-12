import React from 'react';
import {render} from '@testing-library/react-native';
import UITextView from '../ui-text-view';
import {FONT_SIZE, FONT_TYPE} from '../../../theme/font';
import COLORS from '../../../theme/colors';

test('UI Text test cases', () => {
  // Render view
  const {getByText} = render(
    <UITextView
      type={FONT_TYPE.bold}
      size={FONT_SIZE.large}
      color={COLORS.PRIMARY}>
      Sample text
    </UITextView>,
  );

  // Expect exact value which we passed as prop
  const textView = getByText('Sample text');
  expect(textView.props.children).toEqual('Sample text');
  expect(textView.props.style[0].fontFamily).toEqual('OpenSans-Bold');
  expect(textView.props.style[1].color).toEqual(COLORS.PRIMARY);
});
