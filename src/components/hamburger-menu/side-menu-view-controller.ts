import {Linking} from 'react-native';
import UIToast from '@services/UIToast/ui-toast';
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
        UIToast('unable to support');
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
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        UIToast('Make sure WhatsApp installed on your device');
      });
  };

  return {onNavigate, onLanguageSwitch, onCall, onWhatsappShare};
};

export default useHamburgerActions;
