import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

type homeParamList = {
  Home: undefined;
  MyCourse: {courseList: Array<String>} | undefined;
};

type myCourseNavigationProps = StackNavigationProp<homeParamList>;
type myCourseScreenProps = StackScreenProps<homeParamList, 'MyCourse'>;
