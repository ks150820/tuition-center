import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

type homeParamList = {
  Home: undefined;
  MyCourse: {courseList: Array<String>} | undefined;
  TestExperience: {value: string | number} | undefined;
  InstructionScreen: undefined;
  HelpFeedback: {componentName: string} | undefined;
};

type myCourseNavigationProps = StackNavigationProp<homeParamList>;
type myCourseScreenProps = StackScreenProps<homeParamList, 'MyCourse'>;
type testExperienceScreenProps = StackScreenProps<
  homeParamList,
  'TestExperience'
>;
type instructionScreenProps = StackScreenProps<
  homeParamList,
  'InstructionScreen'
>;
type homeScreenProps = StackScreenProps<homeParamList, 'Home'>;
type feedbackScreenProps = StackScreenProps<homeParamList, 'HelpFeedback'>;
