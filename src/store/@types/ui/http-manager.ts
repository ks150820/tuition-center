type httpMethods = import('../../enum').httpMethods;

interface dataObject {
  [key: string]: string | object | number | boolean;
}
type haltedApiType = {
  url: string;
  method: httpMethods;
  data?: dataObject;
};
export interface httpManager {
  error: {errorMessage: string; errorCode: string};
  haltedAPiCalls: haltedApiType[];
  authToken: {
    isUpdated: boolean;
    token: string;
    lastUpdated: number;
  };
}
