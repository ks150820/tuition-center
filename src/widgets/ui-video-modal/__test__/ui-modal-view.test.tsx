import React from 'react';
import {render} from 'test-helper/test-renderer';
import {MODAL_CONSTANTS} from '../resources/values/constants';
import ModalView from '../ui-modal-view';
import {BackHandler, View} from 'react-native';
import {act} from 'react-test-renderer';

test('Modal view children rendering verification', () => {
  // Mock event handler
  const onBackButtonPress = jest.fn();
  // Render view
  const {getByTestId} = render(
    <ModalView
      isVisible={true}
      testID={MODAL_CONSTANTS.TEST_ID}
      onBackButtonPress={onBackButtonPress}>
      <View />
    </ModalView>,
  );

  // Get element by test id
  const modal = getByTestId(MODAL_CONSTANTS.TEST_ID);

  // Verify view rendered correctly or not
  expect(modal.props.visible).toEqual(true);

  // Perform device's back action programmatically
  act(() => {
    BackHandler.mockPressBack();
  });

  // Expect method to be called
  expect(onBackButtonPress).toBeCalled();
});
