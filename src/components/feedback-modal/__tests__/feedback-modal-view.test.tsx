import React from 'react';
import {fireEvent} from '@testing-library/react-native';

import {render} from '@store/util/test.util';
import FeedbackModalView from '../feedback-modal-view';

describe('feedback-modal-view', () => {
  const dummyData = [
    {
      image: require('@assets/avatar/avatar.jpg'),
      text: 'I am the modal content!',
      url: 'https://play.google.com/store/search?q=exampur&c=apps',
    },
    {
      image: require('@assets/avatar/avatar.jpg'),
      text: 'I am the modal content!',
      url: 'https://play.google.com/store/search?q=exampur&c=apps',
    },
    {
      image: require('@assets/avatar/avatar.jpg'),
      text: 'I am the modal content!',
      url: 'Feedback',
    },
  ];
  test('test to press the list to passing the navigation/screen url or name and need configuration button ', () => {
    const props = {
      handleRouting: jest.fn(),
      data: dummyData,
    };

    const {getAllByTestId} = render(
      <FeedbackModalView
        modalVisible={true}
        needConfigurationButton={true}
        handleDontAskAgain={jest.fn()}
        closeModal={jest.fn()}
        {...props}
      />,
    );

    fireEvent.press(getAllByTestId('listHandle')[0]);
    expect(props.handleRouting).toHaveBeenCalledTimes(1);
  });

  test('test list footer configuration buttons', () => {
    const props = {
      handleDontAskAgain: jest.fn(),
      closeModal: jest.fn(),
      data: dummyData,
    };

    const {getAllByTestId} = render(
      <FeedbackModalView
        modalVisible={true}
        handleRouting={jest.fn()}
        needConfigurationButton={true}
        {...props}
      />,
    );

    fireEvent.press(getAllByTestId('uibutton')[0]);
    fireEvent.press(getAllByTestId('uibutton')[1]);
  });

  test('test list footer when configuration button not need', () => {
    const props = {
      handleDontAskAgain: jest.fn(),
      closeModal: jest.fn(),
      data: dummyData,
    };

    const {} = render(
      <FeedbackModalView
        modalVisible={true}
        handleRouting={jest.fn()}
        needConfigurationButton={false}
        {...props}
      />,
    );
  });
});
