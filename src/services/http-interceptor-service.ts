import axios from 'axios';
import {store} from '../store/configureStore';
import {httpMethods} from '../store/enum';
import {
  handleAuthTokenUpdate,
  updateHaltedApis,
} from '../store/ui/http-manager';
import {createRequestObject} from '../util/request';

const axiosInstance = axios.create();
const refresh_token =
  '1659525478473_c74b90b6a043b31ac85cd204d46e17e14213fa01c5849fd041f2136795203fabff1a583e00e0a88a8cb5e923c09fca7ce0da15663a8b55a12793c681edb7322e4da36767583d01dc165326bce4fdafe1d4571da1f6e07cc718999928fcb4fd7cc7452ec7b8144b950cdbe056758dad47cb838dccad327282f17d6a9aedeb4db5_48722';
// Add a request interceptor
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

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async error => {
    console.log(JSON.stringify(error), 'error )))))))))))))))))');
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
        createRequestObject('v1/user/oauth/token', httpMethods.POST, {
          grant_type: 'refresh_token',
          refresh_token: refresh_token,
        }),
      )
      .then(tokenRefreshResponse => {
        store.dispatch(handleAuthTokenUpdate(true));
        error.response.config.headers['authorization'] =
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
