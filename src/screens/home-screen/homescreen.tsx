import React from 'react';
import HomeScreenView from './home-screen-view';
// import useHomescreenViewController from './homescreen-view-controller';

interface IHomeScreenProps {}

/**
 *
 * @param props
 * @returns
 */
const HomeScreen: React.FunctionComponent<IHomeScreenProps> = () => {
  //   const {} = useHomescreenViewController({});

  return <HomeScreenView />;
};

export default HomeScreen;
