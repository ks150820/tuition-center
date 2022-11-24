import React, {ReactElement} from 'react';

import FreeCoursesComponentView from './free-courses-component-view';

interface IFreeCoursesComponentProps {}

const FreeCoursesComponent = ({}: IFreeCoursesComponentProps): ReactElement => {
  return <FreeCoursesComponentView />;
};

export default FreeCoursesComponent;
