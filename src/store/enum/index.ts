export enum httpMethods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
  DEFAULT = 'get',
}

export enum BASE_URL {
  PRODUCTION = 'https://www.upgradjeet.com/api/',
  STAGING = 'https://mocki.io/v1/',
}

export enum CACHING_TIME {
  INVALIDATE = 0,
  SHORT = 1, // for testing purpose otherwise its 5 minutes
  LONG = 10,
}
