import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import UIRow from '@widgets/ui-row';
import HamburgerMenu from '@components/hamburger-menu/hamburger-menu-view';
import HamburgerIcon from '@resources/icons/hamburger-icon';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import {COLORS} from '@resources/colors';
import styles from './style';

interface IBottomTabHeaderView {
  title: string;
}
const BottomTabHeaderView = ({title}: IBottomTabHeaderView) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <UIRow style={styles.container}>
      <Pressable
        onPress={() => {
          setIsVisible(!isVisible);
        }}
        style={{padding: 12}}>
        <HamburgerIcon />
      </Pressable>
      <UIText FontType={FONT_TYPE.OTHERS} style={styles.title}>
        {title}
      </UIText>
      <HamburgerMenu setIsVisible={setIsVisible} isVisible={isVisible} />
    </UIRow>
  );
};

export default BottomTabHeaderView;
