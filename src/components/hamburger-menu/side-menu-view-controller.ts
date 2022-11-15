import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {Linking} from 'react-native';
import UIToast from '@services/UIToast/ui-toast';
const useHamburgerActions = () => {
  const onNavigate = () => {};
  const onLanguageSwitch = () => {};
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
  const onWhatsappShare = (phone: string, msg: string) => {
    let mobile = '+' + phone;
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            UIToast('Make sure WhatsApp installed on your device');
          });
      } else {
        UIToast('Please insert message to send');
      }
    } else {
      UIToast('Please insert mobile no');
    }
  };

  return {onNavigate, onLanguageSwitch, onCall, onWhatsappShare};
};

export default useHamburgerActions;
