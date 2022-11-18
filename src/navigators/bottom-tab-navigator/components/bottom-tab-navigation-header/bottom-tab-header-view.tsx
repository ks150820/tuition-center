import {Pressable} from 'react-native';
import React, {useState} from 'react';
import UIRow from '@widgets/ui-row';
import HamburgerMenu from '@components/hamburger-menu/hamburger-menu-view';
import HamburgerIcon from '@resources/icons/hamburger-icon';
import styles from './style';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';

interface IBottomTabHeaderView {
  title: string;
}
/**
 *
 * @param title navigator title to render on the custom header
 * @returns custom header with hamburger menu controller and title
 */
const BottomTabHeaderView: React.FC<IBottomTabHeaderView> = ({title}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <UIRow style={styles.container}>
      <Pressable
        onPress={() => {
          setIsVisible(!isVisible);
        }}
        style={styles.hamburgerIconContainer}>
        <HamburgerIcon />
      </Pressable>
      <UIText FontType={FONT_TYPE.OTHERS}>{title}</UIText>
      <HamburgerMenu setIsVisible={setIsVisible} isVisible={isVisible} />
    </UIRow>
  );
};

export default BottomTabHeaderView;
