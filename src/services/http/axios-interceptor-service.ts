import {store} from '@store/configureStore';
import {updateAuthToken} from '@store/entities/auth';
import {BASE_URL} from '@store/enum';

import axios, {AxiosRequestConfig} from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import {
  createRequest,
  HttpMethod,
  HttpClient,
} from '@secure-access-control/client';

const refreshAuthLogic = (failedRequest: any) =>
  axios
    .request(
      createRequest(
        BASE_URL.PRODUCTION,
        'v1/user/oauth/token',
        HttpMethod.POST,
        HttpClient.MOBILE,
        null,
        {
          grant_type: 'refresh_token',
          refresh_token: store.getState().auth.authDetails.refreshToken,
        },
      ),
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
