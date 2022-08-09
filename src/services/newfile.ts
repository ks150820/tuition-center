import {createApi} from '@reduxjs/toolkit/query';
import {BaseQueryFn} from '@reduxjs/toolkit/query';
import axios from 'axios';
import {AxiosRequestConfig, AxiosError} from 'axios';
// import {store} from '../store/configureStore';
const createRequest = async (
  url: string,
  method: AxiosRequestConfig['method'],
  data?: AxiosRequestConfig['data'],
  params?: AxiosRequestConfig['params'],
) => {
  return axios({
    url: 'base' + url,
    method,
    data,
    params,
    headers: {
      Authorization: 'Bearer ' + 'token',
    },
  });
};
const refreshAuthLogic = async () => {
  const {refreshToken} = {refreshToken: 'refresh token'};
  if (refreshToken !== null) {
    return axios
      .post('/refresh', null, {
        baseURL: 'base url',
        headers: {
          Authorization: 'Bearer ' + 'refreshToken',
        },
      })
      .then(resp => {
        // store.dispatch(setToken({token: resp.data.access_token}));
        console.log(resp);
      })
      .catch(err => {
        if (err.response) {
          //   store.dispatch(setLogout());
          console.log(err);
        }
      });
  }
};
const axiosBaseQuery =
  (
    {baseUrl}: {baseUrl: string} = {baseUrl: ''},
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({url, method, data, params}) => {
    try {
      const result = await createRequest(baseUrl + url, method, data, params);
      return {data: result.data};
    } catch (axiosError) {
      refreshAuthLogic();
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://example.com',
  }),
  endpoints(build) {
    return {
      query: build.query({query: () => ({url: '/query', method: 'get'})}),
      mutation: build.mutation({
        query: () => ({url: '/mutation', method: 'post'}),
      }),
    };
  },
});
