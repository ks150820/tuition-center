import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import UIRow from '@widgets/ui-row';
import HamburgerMenu from '@components/hamburger-menu/hamburger-menu-view';

interface IBottomTabHeaderView {
  title: string;
}
const BottomTabHeaderView = ({title}: IBottomTabHeaderView) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <UIRow>
      <Pressable
        onPress={() => { setIsVisible(!isVisible)}}
        style={{backgroundColor: 'red', padding: 12}}>
        <Text style={{color: '#212121'}}>Hello</Text>
      </Pressable>
      <Text style={{color: '#212121'}}>{title}</Text>
      <HamburgerMenu setIsVisible={setIsVisible} isVisible={isVisible} />
    </UIRow>
  );
};

export default BottomTabHeaderView;
