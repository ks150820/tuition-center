import {
  ACTIVE_HOME_ICON,
  INACTIVE_HOME_ICON,
  ACTIVE_MY_COURSE_ICON,
  IN_ACTIVE_MY_COURSE_ICON,
  ACTIVE_VIDEOS,
  IN_ACTIVE_VIDEOS,
} from '@assets/icons/svg-icons';
import HomeNavigator from '../home-navigator';
import CoursesScreen from '@screens/courses-screen';
import FreeVideosScreen from '@screens/free-videos-screen';
import StudyMaterial from '@screens/study-material-screen';

interface IBottomTabOptions {
  title: string;
  icon: {
    active: string;
    inActive: string;
  };
  component: () => JSX.Element;
}
export const bottomTabOptions: IBottomTabOptions[] = [
  {
    title: 'Home',
    icon: {
      active: ACTIVE_HOME_ICON,
      inActive: INACTIVE_HOME_ICON,
    },
    component: HomeNavigator,
  },
  {
    title: 'Courses',
    icon: {
      active: ACTIVE_MY_COURSE_ICON,
      inActive: IN_ACTIVE_MY_COURSE_ICON,
    },
    component: CoursesScreen,
  },
  {
    title: 'FreeVideo',
    icon: {
      active: ACTIVE_VIDEOS,
      inActive: IN_ACTIVE_VIDEOS,
    },
    component: FreeVideosScreen,
  },
  {
    title: 'StudyMaterial',
    icon: {
      active: ACTIVE_VIDEOS,
      inActive: IN_ACTIVE_VIDEOS,
    },
    component: StudyMaterial,
  },
];
