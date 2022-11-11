import React from 'react';
import useMainScreenViewController from './main-screen-view-controller';
import PostAuthNavigator from '../../navigators/post-auth-navigator';
import PreAuthNavigator from '../../navigators/pre-auth-navigator';

const MainScreen = () => {
  const {isLoggedIn} = useMainScreenViewController();

  return <>{!isLoggedIn ? <PostAuthNavigator /> : <PreAuthNavigator />}</>;
};

export default MainScreen;
