type CACHING_TIME = import('../store/enum').CACHING_TIME;
type httpMethods = import('../store/enum').httpMethods;

interface LooseObject {
  [key: string]: any;
}
interface IDispatchType {
  url: string;
  method: httpMethods;
  data?: object;
  reducerData?: object;
  onStart: string;
  onSuccess: string;
  onError: string;
  auth: boolean;
  cacheValidityDuration: CACHING_TIME; // 10 minutes will be recommended
}
