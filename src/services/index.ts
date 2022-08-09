import hasher from 'hash.js';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; // don't forget the /react for autogenerations of hooks
const xUserAgent = hasher
  .sha256()
  .update(`${Math.floor(Math.random() * Math.floor(1000))}`)
  .digest('hex');

export const createRequest = (
  url: string,
  method: string = 'get',
  data: any = null,
  auth: any,
) => {
  let headers: LooseObject = {
    'x-user-agent': xUserAgent,
  };
  const request: LooseObject = {
    baseURL: '',
    headers: headers,
    method,
    url,
  };
  let urlHash = hasher.sha256().update(JSON.stringify(request)).digest('hex');
  request.headers['x-hash'] = urlHash;
  request.headers['x-request-from'] = 'mobile';
  if (auth) headers['authorization'] = 'Bearer ' + 'refresh-token';
  request.data = data;

  return request;
};
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stg.upgradjeet.com/api/', // indicate the url base of your API
  }),
  endpoints: builder => ({
    getMessage: builder.query<any, void>({
      //Query endpoints
      query: () => 'v1/7621e155-8808-45f6-ba46-4db84498e0d0',
    }),
  }),
});
export const {
  useGetMessageQuery, // use[GetMessageById]Query
} = api;
