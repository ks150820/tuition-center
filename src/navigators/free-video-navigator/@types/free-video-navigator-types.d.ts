type StackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp;
type StackScreenProps = import('@react-navigation/stack').StackScreenProps;

type freeVideoParamList = {
  FreeVideoScreen: undefined;
  VideoDetail: undefined;
};

type freeVideoScreenProps = StackScreenProps<
  freeVideoParamList,
  'FreeVideoScreen'
>;

type videoDetails = StackScreenProps<freeVideoParamList, 'VideoDetail'>;
