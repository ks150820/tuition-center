import React, {ReactElement} from 'react';
import useLiveClassesComponentController from './live-classes-component-controller';

import LiveClassesComponentView from './live-classes-component-view';

interface ILiveClassesComponentProps {}
const LiveClassesComponent = ({}: ILiveClassesComponentProps): ReactElement => {
    const {tabId, dummy_data, categories_data, categoriesTabId, handleTabs, handleCategoriesTabs} = useLiveClassesComponentController();
  return <LiveClassesComponentView tabId={tabId} categories_data={categories_data} data={dummy_data} categoriesTabId={categoriesTabId} handleTabs={(id: string) => handleTabs(id)} handleCategoriesTabs={(id: string) => handleCategoriesTabs(id)} />;
};

export default LiveClassesComponent;
