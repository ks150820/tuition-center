import React, {ReactElement} from 'react';
import useMissedClassesComponentController from './missed-classes-component-controller';

import MissedClassesComponentView from './missed-classes-component-view';

interface IMissedClassesComponentProps {}

const MissedClassesComponent =
  ({}: IMissedClassesComponentProps): ReactElement => {
    const {tabsId ,handleMissedComponentTabs}  = useMissedClassesComponentController();
    return <MissedClassesComponentView tabID={tabsId} onChangeTabs={(id: string) => handleMissedComponentTabs(id)} />;
  };

export default MissedClassesComponent;
