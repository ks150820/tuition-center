import {waitFor} from '@testing-library/react-native';
import {renderHook} from '@test/test-utils';

import useUICheckboxController from '../ui-checkbox-controller';

describe('ui-checkbox-controller', () => {
  test('test check box handler function, through name of the checkbox it will set the state according to the checkbox name and initially isClicked is false after clicking calling the method then isClicked will become true', () => {
    const {result} = renderHook(useUICheckboxController, {onSelect: jest.fn()});

    waitFor(() => {
      expect(result.current.isClicked).toBe(false);
      result.current.handleCheckbox('test');
    });
    expect(result.current.isClicked).toBe(true);
  });
});
