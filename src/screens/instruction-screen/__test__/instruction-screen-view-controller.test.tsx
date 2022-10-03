import {waitFor} from '@testing-library/react-native';
import {renderHook} from '@store/util/test.util';
import useInstructionScreenController from '@screens/instruction-screen/instruction-screen-view-controller';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('instruction-screen-view-controller', () => {
  test('test component for English option value and test for loader and languages', () => {
    const {result} = renderHook(
      useInstructionScreenController,
      {},
      {
        entities: {
          testExperience: {
            loading: true,
          },
        },
      },
    );

    waitFor(() => {
      result.current.handleTestShowOption();
      result.current.handleShowOptions();
      result.current.handleTermsData(true);
      result.current.handleOptionValue({name: 'English', id: 'en'});
      result.current.handleTestLanguage({name: 'English', id: 'en'});
      result.current.handleStartTest();
      result.current.handleTerms('test');
      expect(result.current.loader).toBe(true);
      expect(result.current.languages).toMatchSnapshot([
        {name: 'English', id: 'en'},
        {name: 'Hindi', id: 'hi'},
      ]);
    });
  });
  test('test component for hindi option', () => {
    const {result} = renderHook(
      useInstructionScreenController,
      {},
      {
        entities: {
          testExperience: {
            loading: true,
          },
        },
      },
    );

    waitFor(() => {
      result.current.handleOptionValue({name: 'Hindi', id: 'hi'});
    });
  });
});
