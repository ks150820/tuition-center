import React, {ReactElement} from 'react';

import FreeCoursesComponentView from './free-courses-component-view';
import useFreeCoursesComponentController from './free-courses-component-controller';

const FreeCoursesComponent = ({}: IFreeCoursesComponentProps): ReactElement => {
  const {courses, handleOnCardPress} = useFreeCoursesComponentController();
  return <FreeCoursesComponentView courses={courses} handleOnCardPress={handleOnCardPress} />;
};

export default FreeCoursesComponent;
