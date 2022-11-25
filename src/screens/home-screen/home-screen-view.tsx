import HamburgerMenu from '@components/hamburger-menu/hamburger-menu-view';
import {FONT_TYPE} from '@theme/font';
import UIText from '@widgets/ui-text';
import React, {useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import useHomeScreenViewController from './homescreen-view-controller';

interface IHomeScreenViewProps {
  navigation: any;
}

/**
 * View for Homescreen
 * @param props
 * @returns
 */
const HomeScreenView: React.FunctionComponent<IHomeScreenViewProps> = ({
  navigation,
}: any) => {
  const {onPress, onRetry, onStartTest, openFeedBackModal, liveChat} =
    useHomeScreenViewController({
      navigation,
    });

  const [isVisible, setIsVisible] = useState(false);
  return <View style={{flex: 1, backgroundColor: 'pink'}}></View>;
};

export default HomeScreenView;
