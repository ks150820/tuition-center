type NavigatorScreenParams =
  import('@react-navigation/native').NavigatorScreenParams;

type bottomTabParamList = {
  HomeNavigator: NavigatorScreenParams<homeParamList>;
  Profile: undefined;
};
