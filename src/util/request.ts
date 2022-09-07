import {requestMethodType} from '../store/@types/api/api';

type progressHandlerType = (progressEvent: number) => {};
interface IRequestType {
  url: string; // `url` is the server URL that will be used for the request
  method: requestMethodType; // `method` is the request method to be used when making the request
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: string;
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
}

export const createRequestObject = (
  url: string,
  method: requestMethodType,
  data?: object,
  timeout?: number,
  onUploadProgressHandler?: progressHandlerType,
  onDownloadProgressHandler?: progressHandlerType,
) => {
  const request: IRequestType = {
    url: url,

    method: method, // default

    baseURL: 'https://mocki.io/v1/',
  };

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
