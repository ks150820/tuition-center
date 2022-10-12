import React from 'react';

import {render} from '@store/util/test.util';
import TestContext from '@components/contexts/test-context';
import BottomHeaderView from '../bottom-header-tab-view';

test('test component for heading and timer when test duration is passed', () => {
  const contextObject = {
    infoButton: true,
    isVisible: true,
    questionIndex: 0,
    pauseTimer: true,
    sectionQuestions: [],
    timeUp: true,
    toggleInfoButton: () => {},
    flatListRefForQuestionTab: {current: jest.fn()},
    flatListRefForSections: {current: jest.fn()},
    setQuestionNo: jest.fn(),
    saveNext: jest.fn(),
    handleBottomSheet: jest.fn(),
    toggleBottomSheet: jest.fn(),
    setQuestionIndex: jest.fn(),
    scrollToIndex: jest.fn(),
    getStatusClass: jest.fn(),
    handleMarkAndReview: jest.fn(),
    clearCurrentAnswer: jest.fn(),
    setTimeUp: jest.fn(),
  };

  const props = {
    questionIndex: 1,
    totalQuestions: 100,
    pauseTimer: true,
    testDuration: 60,
  };
  const {getByText} = render(
    <TestContext.Provider value={contextObject}>
      <BottomHeaderView {...props} />
    </TestContext.Provider>,
  );

  expect(getByText(/Questions/i).props.children[0]).toContain('Questions');
});
