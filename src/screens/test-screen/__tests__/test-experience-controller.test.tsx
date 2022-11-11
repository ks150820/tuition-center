// import React from 'react';
import {BackHandler, Alert} from 'react-native';
import {waitFor} from '@testing-library/react-native';
import {renderHook} from '@store/util/test.util';

import useTestExperienceController from '../test-screen-controller';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('test-experience-controller', () => {
  jest.useFakeTimers();
  test('test controller for all the function which needs to be initially call', () => {
    // jest.spyOn(React, 'useRef').mockImplementationOnce(() => {
    //   return {current: {scrollToIndex: jest.fn()}};
    // });
    BackHandler.addEventListener = jest.fn((_value, backAction) => {
      backAction();
      Alert.alert = jest.fn((_text_one, _text_two, arr) => {
        if (arr) {
          const [object_first, object_second] = arr;
          if (object_first && object_first.onPress) object_first.onPress();
          if (object_second && object_second.onPress) object_second.onPress();
        }
      });
      return {remove: jest.fn()};
    });

    const {result} = renderHook(
      useTestExperienceController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                test_duration: 60,
                logs: [
                  {
                    _id: '123',
                    status: 0,
                    selected_option: ['A'],
                  },
                  {
                    _id: '1234',
                    status: 1,
                    selected_option: ['A'],
                  },
                  {
                    _id: '12345',
                    status: 2,
                    selected_option: ['B'],
                  },
                  {
                    _id: '123456',
                    status: 3,
                    selected_option: ['B'],
                  },
                  {
                    _id: '1234567',
                    status: 4,
                    selected_option: ['B'],
                  },
                ],
                sections: [
                  {
                    section_name1: 'REASONING',
                    questions: [
                      {
                        _id: '123',
                        text: {
                          en: 'question 1',
                          hi: 'question 1',
                        },
                      },
                      {
                        _id: '1234',
                        text: {
                          en: 'question 2',
                          hi: 'question 2',
                        },
                      },
                      {
                        _id: '12345',
                        text: {
                          en: 'question 3',
                          hi: 'question 3',
                        },
                      },
                    ],
                  },
                ],
              },
              selectedSection: 'REASONING',
            },
            testInfo: {
              questionIndex: 0,
              totalQuestions: 0,
            },
            currentQuestionIdData: {
              question_type: 'mcq',
            },
            test_language: 'hi',
            testId: 'efgh3455sk',
            sectionInfo: {
              index: 0,
            },
            examStartTime: null,
            questionId: '123',
            questions: [
              {
                _id: '123',
              },
            ],
          },
        },
      },
    );
    jest.advanceTimersByTime(1000);
    // jest.runAllTimers();
    waitFor(() => {
      result.current.contextObject.incQuesIndex();
      result.current.scrollToFirst();
    });
    result.current.contextObject.handleMarkAndReview();
    waitFor(() => {
      result.current.contextObject.scrollToIndex();
    });
    result.current.contextObject.scrollToIndex();
    result.current.contextObject.saveNext();
    result.current.contextObject.clearCurrentAnswer();
    result.current.contextObject.toggleInfoButton();
    result.current.contextObject.toggleBottomSheet();
    result.current.contextObject.toggleBottomSheet();
    result.current.contextObject.getStatusClass('1234');
    result.current.contextObject.getStatusClass('12345');
    result.current.contextObject.getStatusClass('123456');
    result.current.contextObject.getStatusClass('1234567');
    result.current.contextObject.getStatusClass('123');
  });

  test('test cases for mark and review function after changing the log status', () => {
    const {result} = renderHook(
      useTestExperienceController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                test_duration: 60,
                logs: [
                  {
                    _id: '123',
                    status: 4,
                    selected_option: ['A'],
                  },
                ],
                sections: [
                  {
                    section_name1: 'REASONING',
                    questions: [
                      {
                        _id: '123',
                        text: {
                          en: 'question 1',
                          hi: 'question 1',
                        },
                      },
                    ],
                  },
                ],
              },
              selectedSection: 'REASONING',
            },
            testInfo: {
              questionIndex: 0,
              totalQuestions: 0,
            },
            currentQuestionIdData: {
              question_type: 'mcq',
            },
            test_language: 'hi',
            testId: 'efgh3455sk',
            sectionInfo: {
              index: 0,
            },
            examStartTime: null,
            questionId: '123',
            questions: [
              {
                _id: '123',
              },
            ],
          },
        },
      },
    );

    result.current.contextObject.handleMarkAndReview();
    // result.current.updateStatusCall('clearAnswer');
  });

  test('test cases for update status method for attended', () => {
    const {result} = renderHook(
      useTestExperienceController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                test_duration: 60,
                logs: [
                  {
                    _id: '123',
                    status: 5,
                    selected_option: ['A'],
                  },
                ],
                sections: [
                  {
                    section_name1: 'REASONING',
                    questions: [
                      {
                        _id: '123',
                        text: {
                          en: 'question 1',
                          hi: 'question 1',
                        },
                      },
                    ],
                  },
                ],
              },
              selectedSection: 'REASONING',
            },
            testInfo: {
              questionIndex: 0,
              totalQuestions: 0,
            },
            currentQuestionIdData: {
              question_type: 'mcdsq',
            },
            test_language: 'hi',
            testId: 'efgh3455sk',
            sectionInfo: {
              index: 0,
            },
            examStartTime: null,
            questionId: '123',
            questions: [
              {
                _id: '123',
              },
            ],
          },
        },
      },
    );

    // result.current.updateStatusCall('markAndreview');
    // result.current.updateStatusCall('attended');
    result.current.contextObject.getStatusClass('123');
    result.current.contextObject.clearCurrentAnswer();
    // result.current.scrollToIndex();
  });

  test('test cases for update status method for clear answer function', () => {
    const {result} = renderHook(
      useTestExperienceController,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                test_duration: 60,
                logs: [
                  {
                    _id: '123',
                    status: 3,
                    selected_option: ['A'],
                  },
                ],
                sections: [
                  {
                    section_name1: 'REASONING',
                    questions: [
                      {
                        _id: '123',
                        text: {
                          en: 'question 1',
                          hi: 'question 1',
                        },
                      },
                    ],
                  },
                ],
              },
              selectedSection: 'REASONING',
            },
            testInfo: {
              questionIndex: 0,
              totalQuestions: 0,
            },
            currentQuestionIdData: {
              question_type: 'mcdsq',
            },
            test_language: 'hi',
            testId: 'efgh3455sk',
            sectionInfo: {
              index: 0,
            },
            examStartTime: null,
            questionId: '123',
            questions: [
              {
                _id: '123',
              },
            ],
          },
        },
      },
    );

    // result.current.updateStatusCall('markAndreview');
    // result.current.updateStatusCall('attended');
    result.current.contextObject.getStatusClass('123');
    result.current.contextObject.clearCurrentAnswer();
    // result.current.scrollToIndex();
  });
});
