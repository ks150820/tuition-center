import React, {ReactElement} from 'react';
import useLiveClassesComponentController from './live-classes-component-controller';

import LiveClassesComponentView from './live-classes-component-view';

const LiveClassesComponent = ({}: ILiveClassesComponentProps): ReactElement => {
  const CONTROLLER = useLiveClassesComponentController();
  return (
    <LiveClassesComponentView
      tabId={CONTROLLER.tabId}
      genres={CONTROLLER.genres}
      tabIndex={CONTROLLER.tabIndex}
      categoriesTabIndex={CONTROLLER.categoriesTabIndex}
      data={CONTROLLER.dummy_data}
      liveClasses={CONTROLLER.liveClasses}
      categoriesTabId={CONTROLLER.categoriesTabId}
      handleTabs={(index: number) => CONTROLLER.handleTabs(index)}
      handleCategoriesTabs={(index: number) =>
        CONTROLLER.handleCategoriesTabs(index)
      }
    />
  );
};

export default LiveClassesComponent;
