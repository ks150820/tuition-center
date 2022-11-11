import {act} from '@testing-library/react-native';
import {renderHook} from '@store/util/test.util';
import useQualitySelectorModalController from '../quality-selector-modal-view-controller';

test('Quality selector controller test cases', () => {
  // Render hook
  const {result} = renderHook(useQualitySelectorModalController);

  // Perform function call programmatically
  act(() => {
    result.current.toggleModal(true);
  });
  expect(result.current.isVisible).toBe(true);
});
