import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {render} from '@store/util/test.util';
import SectionTabView from '../section-tabs-view';

describe('section-tab-view', () => {
  const sections: sections[] = [
    {
      is_time_bound: true,
      questions: [
        {
          mark: 4,
          negative_mark: -1,
          options: [
            {
              feedback: 'en',
              is_feedback: true,
              sort_by: 1,
              text: {en: '', hi: ''},
              _id: '',
            },
          ],
          question_type: 'mcq',
          section: '',
          text: 'en',
          _id: '1234',
        },
      ],
      sectionTimeFinished: true,
      sectionTimeSpent: 9,
      section_code: 'REASONING',
      section_name: {en: 'REASIONING_ABILITY', hi: 'REASIONING_ABILITY'},
      section_name1: 'REASIONING_ABILITY',
      section_time: 30,
      _id: '1234ff3',
    },
  ];
  test('test section tab view HeaderTop component', () => {
    const {getByTestId, getByText} = render(
      <SectionTabView
        sections={sections}
        isBottomSheetVisible={true}
        sectionIndex={1}
        sectionName="REASIONING_ABILITY"
        handleSectionPress={jest.fn()}
        toggleBottomSheet={jest.fn()}
      />,
      {
        preloadedState: {
          entities: {
            testExperience: {
              list: {
                responseData: {
                  sections: [
                    {
                      section_name: {
                        en: 'xyz',
                        hi: 'xyz',
                      },
                      _id: 1,
                    },
                    {
                      section_name: {
                        en: 'abc',
                        hi: 'abc',
                      },
                      _id: 2,
                    },
                  ],
                },
              },
            },
          },
        },
      },
    );

    fireEvent.press(getByTestId('headerTopOnPress'));
    waitFor(() => {
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
      expect(getByText('xyz').props.children).toBe('xyz');
    });
  });

  test('test section tab view HeaderBottomSheet component', () => {
    const {getAllByTestId, getByTestId} = render(
      <SectionTabView
        sections={sections}
        isBottomSheetVisible={true}
        sectionIndex={1}
        sectionName="REASIONING_ABILITY"
        handleSectionPress={jest.fn()}
        toggleBottomSheet={jest.fn()}
      />,
      {
        preloadedState: {
          entities: {
            testExperience: {
              list: {
                responseData: {
                  sections: [
                    {
                      section_name: {
                        en: 'xyz',
                        hi: 'xyz',
                      },
                      _id: 1,
                    },
                    {
                      section_name: {
                        en: 'abc',
                        hi: 'abc',
                      },
                      _id: 2,
                    },
                  ],
                },
              },
            },
          },
        },
      },
    );

    fireEvent.press(getByTestId('headerTopOnPress'));
    waitFor(() => {
      fireEvent.press(getAllByTestId('renderItemOnPress')[0]);
      fireEvent.press(getAllByTestId('renderItemOnPress')[1]);
      fireEvent.press(getByTestId('backButtonPress'));
    });
  });

  test('test section tab view when sections have only one data', () => {
    const {getByTestId} = render(
      <SectionTabView
        sections={sections}
        isBottomSheetVisible={true}
        sectionIndex={1}
        sectionName="REASIONING_ABILITY"
        handleSectionPress={jest.fn()}
        toggleBottomSheet={jest.fn()}
      />,
      {
        preloadedState: {
          entities: {
            testExperience: {
              list: {
                responseData: {
                  sections: [
                    {
                      section_name: {
                        en: 'xyz',
                        hi: 'xyz',
                      },
                      _id: 1,
                    },
                  ],
                },
              },
            },
          },
        },
      },
    );

    fireEvent.press(getByTestId('headerTopOnPress'));
    waitFor(() => {
      fireEvent.press(getByTestId('backButtonPress'));
    });
  });

  test('test section tab view ListHeaderComponent', () => {
    const {getByTestId} = render(
      <SectionTabView
        sections={sections}
        isBottomSheetVisible={true}
        sectionName="REASIONING_ABILITY"
        handleSectionPress={jest.fn()}
        toggleBottomSheet={jest.fn()}
      />,
      {
        preloadedState: {
          entities: {
            testExperience: {
              list: {
                responseData: {
                  sections: [
                    {
                      section_name: {
                        en: 'xyz',
                        hi: 'xyz',
                      },
                      _id: 1,
                    },
                    {
                      section_name: {
                        en: 'abc',
                        hi: 'abc',
                      },
                      _id: 2,
                    },
                  ],
                },
              },
            },
          },
        },
      },
    );

    fireEvent.press(getByTestId('headerTopOnPress'));
    waitFor(() => {
      fireEvent.press(getByTestId('listHeaderComponentPress'));
      fireEvent.press(getByTestId('backButtonPress'));
    });
  });
});
