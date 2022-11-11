import {waitFor} from '@testing-library/react-native';
import {renderHook} from '@store/util/test.util';
import useSectionTabViewModel from '../section-tabs-controller';

describe('section-tabs-view-controller', () => {
  test('test for bottom sheet function to set the bottom sheet condition', () => {
    const {result} = renderHook(
      useSectionTabViewModel,
      {},
      {
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
    );

    waitFor(() => {
      result.current.toggleBottomSheet();
      result.current.handleSectionPress(1);
    });
  });
});
