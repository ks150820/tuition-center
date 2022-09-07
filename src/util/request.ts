import {requestMethodType} from '../store/@types/api/api';
import {BASE_URL} from '../store/enum';
import hasher from 'hash.js';

type progressHandlerType = (progressEvent: number) => {};
interface IRequestType {
  url: string; // `url` is the server URL that will be used for the request
  method: requestMethodType; // `method` is the request method to be used when making the request
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: BASE_URL;
  data?: {};
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
let headers = {
  'x-user-agent':
    '59b524f8de039389005bce58385cae1d9241abd663e87647727abc8802e85c3b',
};

const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWY3NzJkMDk0MDc2OTcyYzAwOTUzZGEiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY1OTUyNTQ3OCwiZXhwIjoxNjU5NTI2MDc4LCJpc3MiOiJ1cGdyYWRqZWV0LmNvbSJ9.co7OUiUnEubCkNEqVRSbXdis9mP_Bv5TIIe3nnbb6YI';
export const createRequestObject = (
  url: string,
  method: requestMethodType,
  data?: object,
  timeout?: number,
  onUploadProgressHandler?: progressHandlerType,
  onDownloadProgressHandler?: progressHandlerType,
) => {
  const request: IRequestType = {
    baseURL: BASE_URL.PRODUCTION,
    headers: headers,
    method,
    url,
  };

  console.log(method);

  let auth = true;
  let urlHash = hasher.sha256().update(JSON.stringify(request)).digest('hex');

  request.headers['x-hash'] = urlHash;
  request.headers['user-agent'] =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36';
  if (auth) {
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
