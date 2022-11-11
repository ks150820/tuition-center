import {useHttpErrorHandlingService} from '../http-error-handling-service';

describe('testing home screen view', () => {
  test('test component', () => {
    const result = useHttpErrorHandlingService();
    result.View();
    result.retryApiCall();
  });
});
