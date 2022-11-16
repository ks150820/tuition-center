import {View, Text} from 'react-native';
import React from 'react';
import UIRow from '@widgets/ui-row';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import LanguageSwitchIcon from '../../resources/icons/language-switch-label-hamburger';
import colors from '@theme/colors';
import styles from './style';
import {HAMBURGER_MENU} from '@resources/values/strings';

const LanguageSwitchView = () => (
  <UIRow style={styles.alignCenter}>
    <UIText color={colors.accent.royal_blue} FontType={FONT_TYPE.SUBHEADING}>
      {HAMBURGER_MENU.ENGLISH.en}
    </UIText>
    <LanguageSwitchIcon />
  </UIRow>
);

export default LanguageSwitchView;
