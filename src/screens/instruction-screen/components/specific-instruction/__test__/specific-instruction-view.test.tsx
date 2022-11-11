import React from 'react';

import {render} from '@store/util/test.util';
import SpecificInstructionView from '../specific-instruction-view';

describe('specific-instruction-view', () => {
  test('test the html renderer after passing the dummy question', () => {
    const testInstructions = '<p>Specific Instructions</p>';
    const {} = render(
      <SpecificInstructionView testInstructions={testInstructions} />,
    );
  });
});
