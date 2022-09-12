import React from 'react';
import useMainScreenViewController from './main-screen-view-controller';
import PostAuthNavigator from '../../navigators/post-auth-navigator';
import PreAuthNavigator from '../../navigators/pre-auth-navigator';
import {useHttpErrorHandlingService} from '../../services/http-error-handling-service';

const MainScreen = () => {
  const {isLoggedIn} = useMainScreenViewController();
  const ErrorView = useHttpErrorHandlingService();
  return (
    <>
      {isLoggedIn === false ? <PostAuthNavigator /> : <PreAuthNavigator />}
      <ErrorView />
    </>
  );
};

export default MainScreen;
