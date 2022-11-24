import {useState} from 'react';

const useMissedClassesComponentController = () => {
  const [tabsId, setTabsId] = useState<string>('1');
  const handleMissedComponentTabs = (id: string) => {
    setTabsId(id);
  };

  return {tabsId, handleMissedComponentTabs};
};

export default useMissedClassesComponentController;
