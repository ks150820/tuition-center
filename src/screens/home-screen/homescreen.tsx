import React from 'react';
import HomeScreenView from './home-screen-view';
// import useHomescreenViewController from './homescreen-view-controller';

type homeScreenProps =
  import('@navigators/home-navigator/@types/home-navigator-param-list').homeScreenProps;

interface IHomeScreenProps extends homeScreenProps {}

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
