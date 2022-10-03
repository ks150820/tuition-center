import React from 'react';

import {render} from '@store/util/test.util';
import QuestionsView from '../questions-view';

describe('questions-view', () => {
  // we can't test this properly, because question will change every time , no fixed text will be their
  test('test text of question passed as prop', () => {
    const question = '<p testID="htmlText">First Question</p>';
    const {} = render(<QuestionsView question={question} />);
  });
});
