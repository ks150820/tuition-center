import {store} from '@store/configureStore';
import {updateAuthToken} from '@store/entities/auth';
import {httpMethods} from '@store/enum';
import {createRequestObject} from '@util/request';
import axios, {AxiosRequestConfig} from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const refreshAuthLogic = (failedRequest: any) =>
  axios
    .request(
      createRequestObject('v1/user/oauth/token', httpMethods.POST, true, {
        grant_type: 'refresh_token',
        refresh_token: store.getState().auth.authDetails.refreshToken,
      }),
    )
    .then(tokenRefreshResponse => {
      store.dispatch(updateAuthToken(tokenRefreshResponse.data.token));
      failedRequest.response.config.headers['Authorization'] =
        'Bearer ' + tokenRefreshResponse.data.token;
      return Promise.resolve();
    });

createAuthRefreshInterceptor(axios, refreshAuthLogic, {
  onRetry: (
    requestConfig: AxiosRequestConfig,
  ): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
    if (requestConfig.headers) {
      requestConfig.headers['Authorization'] =
        store.getState().auth.authDetails.authToken;
    }

    return requestConfig;
  }, // default: false
});
export const axiosInterceptor = axios.create();
