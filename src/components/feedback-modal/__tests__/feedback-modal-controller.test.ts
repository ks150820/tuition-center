import {renderHook} from '@store/util/test.util';

import useFeedbackModalController from '../feedback-modal-controller';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('feedback-modal-controller', () => {
  test('test modalVisible initial State condition', () => {
    const {result} = renderHook(useFeedbackModalController);

    expect(result.current.modalVisible).toBe(false);
  });
  test('test handleRouting by passing the valid https url', () => {
    const {result} = renderHook(useFeedbackModalController);

    result.current.handleRouting(
      'https://play.google.com/store/search?q=exampur&c=apps',
    );
  });
  test('test handleRouting when passing the screen name', () => {
    const {result} = renderHook(useFeedbackModalController);

    result.current.handleRouting('Feedback');
  });
});
