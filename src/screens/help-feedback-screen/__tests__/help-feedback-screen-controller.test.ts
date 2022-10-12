import {renderHook} from '@test/test-utils';
import {waitFor} from '@testing-library/react-native';

import useHelpFeedbackScreenController from '../help-feedback-screen-controller';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        componentName: 'Feedback',
      },
    }),
  };
});

describe('help-feedback-screen-controller', () => {
  test('test controller, for all methods', () => {
    const {result} = renderHook(useHelpFeedbackScreenController);
    waitFor(() => {
      result.current.handleChangeText('testing');
      result.current.toggleDropdown();
      result.current.handleSelectedOption({name: 'crash app'});
      result.current.handleFeedbackSubmitButton();
      result.current.handleHelpSubmitButton();
    });
  });
});
