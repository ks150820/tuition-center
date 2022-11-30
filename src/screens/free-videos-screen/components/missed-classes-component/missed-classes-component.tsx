import React, {ReactElement} from 'react';
import useMissedClassesComponentController from './missed-classes-component-controller';

import MissedClassesComponentView from './missed-classes-component-view';

const MissedClassesComponent =
  ({}: IMissedClassesComponentProps): ReactElement => {
    const {tabsId, missedClasses, genres, tabsIndex, handleMissedComponentTabs} =
      useMissedClassesComponentController();
    return (
      <MissedClassesComponentView
        tabID={tabsId}
        genres={genres}
        tabsIndex={tabsIndex}
        missedClasses={missedClasses}
        onChangeTabs={(index: number) => handleMissedComponentTabs(index)}
      />
    );
  };

export default MissedClassesComponent;
