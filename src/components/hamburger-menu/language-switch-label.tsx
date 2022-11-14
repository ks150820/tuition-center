import {View, Text} from 'react-native';
import React from 'react';
import UIRow from '@widgets/ui-row';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import LanguageSwitchIcon from '../../resources/icons/language-switch-label-hamburger';

const LanguageSwitchView = () => (
  <UIRow style={{alignItems:"center"}}>
    <UIText  color={'#2665EE'} FontType={FONT_TYPE.OTHERS}>
      {'English'}
    </UIText>
    <LanguageSwitchIcon />
  </UIRow>
);

export default LanguageSwitchView;
