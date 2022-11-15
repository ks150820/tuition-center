type NavigatorScreenParams =
  import('@react-navigation/native').NavigatorScreenParams;
  type StackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp;
type StackScreenProps = import('@react-navigation/stack').StackScreenProps;
type postAuthParamList = {
  BottomNavigator: NavigatorScreenParams<bottomTabParamList>;
  ProfileScreen: string | undefined;
};
type profileScreenProp = StackScreenProps<postAuthParamList, 'ProfileScreen'>;