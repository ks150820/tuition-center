import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

type homeParamList = {
  Home: undefined;
  MyCourse: {courseList: Array<String>} | undefined;
  TestExperience: {value: string | number} | undefined;
  InstructionScreen: undefined;
};

type myCourseNavigationProps = StackNavigationProp<homeParamList>;
type myCourseScreenProps = StackScreenProps<homeParamList, 'MyCourse'>;
type testExperienceScreenProps = StackScreenProps<
  homeParamList,
  'TestExperience'
>;
type homeScreenProps = StackScreenProps<homeParamList, 'Home'>;
