import {NativeModules} from 'react-native';
const {SmsRetrieverApi} = NativeModules;
const useSmsRetrieverService = () => {
  const registerNativeBroadcastReceiver = (): void => {
    SmsRetrieverApi.deRegisterBroadcast();
  };

  const startSmsRetrieverApi = (): void => {
    SmsRetrieverApi.startSmsRetriever();
  };
  return {registerNativeBroadcastReceiver, startSmsRetrieverApi};
};
export default useSmsRetrieverService;
