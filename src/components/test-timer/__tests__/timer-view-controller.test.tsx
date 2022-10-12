import React from 'react';

import {renderHook} from '@store/util/test.util';
// import TestContext from '../../../contexts/test-context';

import useTimerViewController from '@components/test-timer/timer-view-controller';

describe('timer-view-controller', () => {
  test('test controller', async () => {
    jest.useFakeTimers();
    const contextObject = {
      ibutton: true,
      isVisible: true,
      questionIndex: 0,
      pauseTimer: true,
      sectionQuestions: [],
      timeUp: true,
      handleIButton: () => {},
      flatListRef: jest.fn(),
      flatListRefSec: jest.fn(),
      setQuestionNo: jest.fn(),
      saveNext: jest.fn(),
      handleBottomSheet: jest.fn(),
      openBottomSheet: jest.fn(),
      setQuestionIndex: jest.fn(),
      scrollToIndex: jest.fn(),
      getStatusClass: jest.fn(),
      handleMarkAndReview: jest.fn(),
      clearCurrentAnswer: jest.fn(),
      setTimeUp: jest.fn(),
    };
    jest.spyOn(React, 'useRef').mockImplementation(() => ({current: ''}));
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    jest.spyOn(React, 'useContext').mockImplementationOnce(() => contextObject);
    jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());

    const {} = renderHook(
      useTimerViewController,
      {
        duration: -0.1,
        pauseTimer: true,
        timeUpColor: '',
      },
      {},
    );

    jest.advanceTimersByTime(1000);
    // await waitFor(() => {
    //   result.current.onClickReset();
    // });
  });

  test('test controller sdfs', async () => {
    jest.useFakeTimers();
    const contextObject = {
      ibutton: true,
      isVisible: true,
      questionIndex: 0,
      pauseTimer: true,
      sectionQuestions: [],
      timeUp: true,
      handleIButton: () => {},
      flatListRef: jest.fn(),
      flatListRefSec: jest.fn(),
      setQuestionNo: jest.fn(),
      saveNext: jest.fn(),
      handleBottomSheet: jest.fn(),
      openBottomSheet: jest.fn(),
      setQuestionIndex: jest.fn(),
      scrollToIndex: jest.fn(),
      getStatusClass: jest.fn(),
      handleMarkAndReview: jest.fn(),
      clearCurrentAnswer: jest.fn(),
      setTimeUp: jest.fn(),
    };
    jest.spyOn(React, 'useRef').mockImplementation(() => ({current: ''}));
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    jest.spyOn(React, 'useContext').mockImplementationOnce(() => contextObject);
    jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());

    const {} = renderHook(
      useTimerViewController,
      {
        duration: 1,
        pauseTimer: true,
        timeUpColor: '',
      },
      {},
    );

    jest.advanceTimersByTime(1000);
    // await waitFor(() => {
    //   result.current.onClickReset();
    // });
  });
});
