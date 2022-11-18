import {Linking} from 'react-native';
import UIToast from '@services/UIToast/ui-toast';
import {ERROR_MESSAGES} from './constants';
const useHamburgerActions = () => {
  const onNavigate = () => {};
  const onLanguageSwitch = () => {};
  /**
   * @param phoneNumber phone number of user
   */
  const onCall = (phoneNumber: string) => {
    let numberToCall = `tel:${phoneNumber}`;
    Linking.canOpenURL(numberToCall).then(supported => {
      if (supported) {
        return Linking.openURL(numberToCall);
      } else {
        UIToast(ERROR_MESSAGES.DIALER_OPEN_ERROR.en);
      }
    });
  };
  /**
   * @param phone phone number for whatsapp chat
   * @param msg message to send to user
   */
  const onWhatsappShare = (phone: string, msg: string) => {
    let mobile = '+' + phone;
    let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
    Linking.openURL(url).catch(() => {
      UIToast(ERROR_MESSAGES.WHATSAPP_OPEN_ERROR.en);
    });
  };

  return {onNavigate, onLanguageSwitch, onCall, onWhatsappShare};
};

export default useHamburgerActions;
