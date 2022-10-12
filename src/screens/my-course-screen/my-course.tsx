import React from 'react';
import MyCourseView from './my-course-view';

interface IMyCourse extends myCourseScreenProps {
  route: any;
}

const MyCourse = ({route}: IMyCourse) => {
  return <MyCourseView courseList={route.params?.courseList} />;
};

export default MyCourse;
