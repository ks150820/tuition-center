import {httpMethods} from '../../enum';

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
  isAuthTokenUpdated: boolean;
  haltedAPiCalls: haltedApiType[];
  refreshToken: string;
}
