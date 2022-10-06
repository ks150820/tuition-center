import {renderHook} from '@store/util/test.util';

import {useLogStatus} from '@screens/components/hooks/log-status-hook/log-status';

describe('log-status', () => {
  test('total answered should be 1', () => {
    const {result} = renderHook(
      useLogStatus,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {
                logs: [
                  {status: 0},
                  {status: 1},
                  {status: 2},
                  {status: 3},
                  {status: 4},
                  {status: 5},
                ],
              },
            },
          },
        },
      },
    );

    expect(result.current.answered).toBe(1);
  });

  test('test when logs are not available and total answered will be 0', () => {
    const {result} = renderHook(
      useLogStatus,
      {},
      {
        entities: {
          testExperience: {
            list: {
              responseData: {},
            },
          },
        },
      },
    );

    expect(result.current.answered).toBe(0);
  });
});
