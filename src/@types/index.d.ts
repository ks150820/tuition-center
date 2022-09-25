import {CACHING_TIME, httpMethods} from '../store/enum';

interface LooseObject {
  [key: string]: any;
}
interface IDispatchType {
  url: string;
  method: httpMethods;
  data?: object;
  onStart: string;
  onSuccess: string;
  onError: string;
  auth: boolean;
  cacheValidityDuration: CACHING_TIME; // 10 minutes will be recommended
}
