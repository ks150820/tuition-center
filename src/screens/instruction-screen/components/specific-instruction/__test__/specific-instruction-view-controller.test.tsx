import {renderHook} from '@store/util/test.util';
import useSpecificInstructionController from '../specific-instruction-view-controller';

describe('specific-instruction-view-controller', () => {
  test('test when language is not given in state', () => {
    const {result} = renderHook(
      useSpecificInstructionController,
      {
        language: '',
      },
      {
        entities: {
          testExperience: {
            specific_instructions: {
              en: '',
              hi: '',
            },
          },
        },
      },
    );

    expect(result.current.testInstructions).toBe('');
  });
  test('test language is given in state', async () => {
    const {result} = renderHook(
      useSpecificInstructionController,
      {
        language: 'en',
      },
      {
        entities: {
          testExperience: {
            specific_instructions: {
              en: 'english',
              hi: 'hindi',
            },
          },
        },
      },
    );

    expect(result.current.testInstructions).toBe('english');
  });
});
