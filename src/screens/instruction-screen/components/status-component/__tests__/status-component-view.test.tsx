import React from 'react';

import {render} from '@store/util/test.util';
import StatusComponent from '../status-component-view';
import {IMAGE_CONSTANTS} from '@screens/instruction-screen/resources/constants/status-components-constants';

describe('status-component-view', () => {
  test('test Answered component', () => {
    const {getByText} = render(
      <StatusComponent backgroundImage={IMAGE_CONSTANTS.IMG_ANSWERED}>
        1
      </StatusComponent>,
    );

    expect(getByText('1').props.children).toEqual('1');
  });
  test('test NotVisited component', () => {
    const {getByText} = render(
      <StatusComponent backgroundImage={IMAGE_CONSTANTS.IMG_NOT_VISITED}>
        1
      </StatusComponent>,
    );

    expect(getByText('1').props.children).toEqual('1');
  });
  test('test NotAnswered component', () => {
    const {getByText} = render(
      <StatusComponent backgroundImage={IMAGE_CONSTANTS.IMG_NOT_ANSWERED}>
        1
      </StatusComponent>,
    );

    expect(getByText('1').props.children).toEqual('1');
  });
  test('test NotAnsweredMarkedReview component', () => {
    const {getByText} = render(
      <StatusComponent
        backgroundImage={IMAGE_CONSTANTS.IMG_NOT_ANSWERED_MARKED}>
        1
      </StatusComponent>,
    );

    expect(getByText('1').props.children).toEqual('1');
  });
  test('test AnsweredMarkedReview component', () => {
    const {getByText} = render(
      <StatusComponent backgroundImage={IMAGE_CONSTANTS.IMG_ANSWERED_MARKED}>
        1
      </StatusComponent>,
    );

    expect(getByText('1').props.children).toEqual('1');
  });
});
