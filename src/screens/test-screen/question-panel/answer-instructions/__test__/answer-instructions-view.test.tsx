import {fireEvent} from '@testing-library/react-native';
import React from 'react';
import {render} from '@store/util/test.util';
import AnswerInstructionsView from '../answer-instructions-view';

describe('answer-instructions-view', () => {
  test('test when question type is passed, test the dropdown options', () => {
    const props = {
      questionType: 'mcq',
      languages: [
        {
          name: 'Hindi',
          id: 'hi',
        },
      ],
      optionsValue: 'hindi',
      showOption: true,
      test_status: [
        {
          text: 'Answers',
          number: 0,
          bgColor: '#efefef',
          textColor: '#fff',
        },
      ],
      toggleOptions: jest.fn(),
      handleOptionsValue: jest.fn(),
    };
    const {getByTestId} = render(<AnswerInstructionsView {...props} />);

    fireEvent.press(getByTestId('selectInputPress'));
    fireEvent.press(getByTestId('clickOption'));
    expect(props.toggleOptions).toHaveBeenCalledTimes(1);
    expect(props.handleOptionsValue).toHaveBeenCalledTimes(1);
  });
});
