type StackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp;
type StackScreenProps = import('@react-navigation/stack').StackScreenProps;
type StackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp;
type CompositeNavigationProp =
  import('@react-navigation/native').CompositeNavigationProp;

type freeVideoParamList = {
  FreeVideoScreen: undefined;
  VideoDetail: undefined;
};

// type freeVideoScreenProps = StackScreenProps<
//   freeVideoParamList,
//   'FreeVideoScreen'
// >;

// type videoDetails = StackScreenProps<freeVideoParamList, 'VideoDetail'>;

type freeVideosScreensNavigation = CompositeNavigationProp<
  StackNavigationProp<homeParamList, 'FreeVideoScreen'>,
  StackNavigationProp<homeParamList, 'VideoDetail'>
>;