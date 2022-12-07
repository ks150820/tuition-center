type NavigatorScreenParams =
  import('@react-navigation/native-stack').NativeStackScreenProps;

type StackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp;
type CompositeNavigationProp =
  import('@react-navigation/native').CompositeNavigationProp;

type postAuthParamList = {
  BottomNavigator: NavigatorScreenParams<bottomTabParamList>;
  ProfileScreen;
  VideoDetail: undefined;
};
// type profileScreenProp = StackNavigationProp<postAuthParamList, 'ProfileScreen'>;

type freeVideosScreensNavigation = CompositeNavigationProp<
  StackNavigationProp<homeParamList, 'ProfileScreen'>,
  StackNavigationProp<homeParamList, 'VideoDetail'>
>;
