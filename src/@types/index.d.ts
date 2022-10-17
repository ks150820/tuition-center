// import {CACHING_TIME, httpMethods} from '../store/enum';

type HttpMethod = import('@secure-access-control/client').HttpMethod;
type CACHING_TIME = import('../store/enum').CACHING_TIME;

interface LooseObject {
  [key: string]: any;
}
interface IDispatchType {
  url: string;
  method: HttpMethod;
  data?: object;
  reducerData?: object;
  onStart: string;
  onSuccess: string;
  onError: string;
  auth: boolean;
  cacheValidityDuration: CACHING_TIME; // 10 minutes will be recommended
}
