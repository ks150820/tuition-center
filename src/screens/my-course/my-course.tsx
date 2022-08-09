import React from 'react';
import {myCourseScreenProps} from '../../navigators/home-navigator/@types/home-navigator-param-list';
import MyCourseView from './my-course-view';

interface IMyCourse extends myCourseScreenProps {}
const MyCourse: React.FC<IMyCourse> = ({route}) => {
  return <MyCourseView courseList={route.params?.courseList} />;
};

export default MyCourse;
