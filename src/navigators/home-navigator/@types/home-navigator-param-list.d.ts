type StackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp;
type StackScreenProps = import('@react-navigation/stack').StackScreenProps;
type homeParamList = {
  HomeScreen: undefined;
  MyCourse: {courseList: Array<String>} | undefined;
  TestExperience: {value: string | number} | undefined;
  InstructionScreen: undefined;
  HelpFeedback: {componentName: string} | undefined;
  LiveClassChatScreen: undefined;
};

type homeScreenProps = StackScreenProps<homeParamList, 'HomeScreen'>;
