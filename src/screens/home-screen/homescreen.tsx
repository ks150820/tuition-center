import React from 'react';
import HomeScreenView from './home-screen-view';

interface IHomeScreenProps extends homeScreenProps {
  navigation: any;
}

/**
 *
 * @param props
 * @returns
 */
const HomeScreen: React.FunctionComponent<IHomeScreenProps> = ({
  navigation,
}) => {
  return <HomeScreenView navigation={navigation} />;
};

export default HomeScreen;
