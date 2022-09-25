import axios from 'axios';
import {store} from '../store/configureStore';
import {httpMethods} from '../store/enum';
import {
  handleAuthTokenUpdate,
  updateHaltedApis,
} from '../store/ui/http-manager';
import {createRequestObject} from '../util/request';

const axiosInstance = axios.create();
// Add a request interceptor, added for reference
axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    console.log(JSON.stringify(config));

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor , added for reference
axiosInstance.interceptors.response.use(
  async response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    /*
     * When response code is 401, try to refresh the token.
     * Eject the interceptor so it doesn’t loop in case
     * token refresh causes the 401 response
     */
    // axios.interceptors.response.eject(interceptor);

    store.dispatch(
      updateHaltedApis({
        url: error?.config?.url,
        method: error?.config?.method,
      }),
    );

    return await axios
      .request(
        createRequestObject('v1/user/oauth/token', httpMethods.POST, true, {
          grant_type: 'refresh_token',
          refresh_token: store.getState().auth.authDetails.refreshToken,
        }),
      )
      .then(tokenRefreshResponse => {
        store.dispatch(handleAuthTokenUpdate(true));
        error.response.config.headers.authorization =
          'Bearer ' + tokenRefreshResponse.data.token;
        //provide a success dispatch
        return axios(error.response.config);
      })
      .catch(() => {
        //handleLogout
        return Promise.reject(error);
      });
  },
);
export const httpInterceptor = axiosInstance;
