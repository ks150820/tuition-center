import {BASE_URL} from '../store/enum';
import hasher from 'hash.js';
import {store} from '../store/configureStore';

type progressHandlerType = (progressEvent: number) => {};
interface IRequestType {
  url: string; // `url` is the server URL that will be used for the request
  method: requestMethodType; // `method` is the request method to be used when making the request
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: BASE_URL;
  data?: object;
  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout?: 0 | 1000 | number; // default is `0` (no timeout)
  // `onUploadProgress` allows handling of progress events for uploads
  // browser only
  onUploadProgress?: progressHandlerType;

  // `onDownloadProgress` allows handling of progress events for downloads
  // browser only
  onDownloadProgress?: progressHandlerType;
  headers: any;
}
const xUserAgent = hasher
  .sha256()
  .update(`${Math.floor(Math.random() * Math.floor(1000))}`)
  .digest('hex');
const authToken = store?.getState()?.auth?.authDetails?.authToken;
export const createRequestObject = (
  url: string,
  method: requestMethodType,
  auth: boolean,
  data?: object,
  timeout?: number,
  onUploadProgressHandler?: progressHandlerType,
  onDownloadProgressHandler?: progressHandlerType,
) => {
  let headers = {
    'x-user-agent': xUserAgent,
  };
  const request: IRequestType = {
    baseURL: BASE_URL.PRODUCTION,
    headers: headers,
    method,
    url,
  };

  let urlHash = hasher.sha256().update(JSON.stringify(request)).digest('hex');

  request.headers['x-hash'] = urlHash;
  request.headers['x-request-from'] = 'mobile';

  if (auth && authToken) {
    request.headers['authorization'] = 'Bearer ' + authToken;
  }

  if (data) {
    request.data = data;
  }
  if (timeout) {
    request.timeout = timeout;
  }
  if (onUploadProgressHandler) {
    request.onUploadProgress = onUploadProgressHandler;
  }
  if (onDownloadProgressHandler) {
    request.onDownloadProgress = onDownloadProgressHandler;
  }

  return request;
};
