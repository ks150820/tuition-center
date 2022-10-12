import React from 'react';
import {render} from '@test/test-utils';
import UiModalView from '../ui-modal-view';

describe('ui-modal-view', () => {
  test('test when isBottomSheet condition is default setted', () => {
    const {} = render(
      <UiModalView modalVisible={true}>
        <></>
      </UiModalView>,
    );
  });
  test('test isBottomSheet condition is true', () => {
    const {} = render(
      <UiModalView modalVisible={true} isBottomSheet={true}>
        <></>
      </UiModalView>,
    );
  });
});
