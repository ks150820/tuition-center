import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {render} from '@store/util/test.util';
import UIBottomSheetView from '../ui-bottom-sheet-view';

describe('ui-bottom-sheet', () => {
  test('Test for ui-bottom sheet-view component to disable the bottom sheet by clicking outside or clicking the mobile back button', () => {
    const {getByTestId} = render(
      <UIBottomSheetView
        visible={true}
        height="92%"
        animationIn="slideInUp"
        animationOut="bounceInUp"
        swipeDirection="down"
        borderTopRadius={10}
        onBackDropPress={jest.fn()}
        onBackButtonPress={jest.fn()}>
        <></>
      </UIBottomSheetView>,
    );

    // screen.debug();
    waitFor(() => {
      fireEvent(
        getByTestId('backButtonPress').children[0] as ReactTestInstance,
        'onSwipeComplete',
        {},
      );
      fireEvent(
        getByTestId('backButtonPress').children[0] as ReactTestInstance,
        'onBackButtonPress',
        {},
      );
      fireEvent(
        getByTestId('backButtonPress').children[0] as ReactTestInstance,
        'onBackdropPress',
        {},
      );
      fireEvent.press(getByTestId('backButtonPress'));
    });
  });

  test('Test for ui-bottom sheet-view component when un-necessary props are not passed', () => {
    const props = {
      visible: true,
    };
    const {getByTestId} = render(
      <UIBottomSheetView {...props}>
        <></>
      </UIBottomSheetView>,
    );

    // screen.debug();
    waitFor(() => {
      fireEvent(
        getByTestId('backButtonPress').children[0] as ReactTestInstance,
        'onSwipeComplete',
        {},
      );
      fireEvent(
        getByTestId('backButtonPress').children[0] as ReactTestInstance,
        'onBackButtonPress',
        {},
      );
      fireEvent(
        getByTestId('backButtonPress').children[0] as ReactTestInstance,
        'onBackdropPress',
        {},
      );
      fireEvent.press(getByTestId('backButtonPress'));
    });
  });
});
