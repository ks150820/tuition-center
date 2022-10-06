import {waitFor} from '@testing-library/react-native';
import {renderHook} from '@store/util/test.util';
import useTermsConditionController from '../terms-condition-view-controller';

describe('terms-condition-view-controller', () => {
  test('test handleTerms method after passing the checkbox condition', () => {
    const {result} = renderHook(useTermsConditionController, {
      handleTermsData: jest.fn(),
    });

    waitFor(() => {
      result.current.handleTerms(true);
    });
  });
});
