import React, {ReactElement} from 'react';

import FreeCoursesComponentView from './free-courses-component-view';
import useFreeCoursesComponentController from './free-courses-component-controller';

const FreeCoursesComponent = ({}: IFreeCoursesComponentProps): ReactElement => {
  const {courses} = useFreeCoursesComponentController();
  return <FreeCoursesComponentView courses={courses} />;
};

export default FreeCoursesComponent;
