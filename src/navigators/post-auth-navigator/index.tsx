import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {postAuthParamList} from './@types/post-auth-param-list';
import BottomTabBar from '../bottom-tab-navigator';
import {useSelector} from 'react-redux';
import {getIsAuthTokenUpdated} from '../../store/ui/http-manager';
import {useHttpErrorHandlingService} from '../../services/http/http-error-handling-service';

const PostAuthStack = createStackNavigator<postAuthParamList>();
const PostAuthNavigator = () => {
  const isAuthTokenUpdateCompleted = useSelector(getIsAuthTokenUpdated);
  const {retryApiCall} = useHttpErrorHandlingService();
  useEffect(() => {
    if (isAuthTokenUpdateCompleted) {
      retryApiCall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthTokenUpdateCompleted]);
  return (
    <PostAuthStack.Navigator>
      <PostAuthStack.Screen
        options={{headerShown: false}}
        name="BottomNavigator"
        component={BottomTabBar}
      />
    </PostAuthStack.Navigator>
  );
};

export default PostAuthNavigator;
