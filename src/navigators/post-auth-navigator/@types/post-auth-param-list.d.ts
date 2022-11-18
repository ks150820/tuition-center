type NavigatorScreenParams =
  import('@react-navigation/native-stack').NativeStackScreenProps;

type postAuthParamList = {
  BottomNavigator: NavigatorScreenParams<bottomTabParamList>;
  ProfileScreen;
};
type profileScreenProp = StackNavigationProp<postAuthParamList, 'ProfileScreen'>;
