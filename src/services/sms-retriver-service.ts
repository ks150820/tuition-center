import {NativeModules} from 'react-native';
const {SmsRetriever} = NativeModules;
const useSmsRetrieverService = () => {
  const registerNativeBroadcastReceiver = (): void => {
    SmsRetriever.deRegisterBroadcast();
  };

  const startSmsRetrieverApi = (): void => {
    SmsRetriever.startSmsRetriever();
  };
  return {registerNativeBroadcastReceiver, startSmsRetrieverApi};
};
export default useSmsRetrieverService;
