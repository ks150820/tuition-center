import {useState} from 'react';
import {useSelector} from 'react-redux';

import {getMissedLiveClasses, getAllGenres} from '@store/entities/free-videos';

const useMissedClassesComponentController = () => {
  const [tabsId, setTabsId] = useState<string>('1');
  const [tabsIndex, setTabsIndex] = useState<number>(0);

  const missedClasses = useSelector(getMissedLiveClasses);
  const genres = useSelector(getAllGenres);

  const handleMissedComponentTabs = (index: number) => {
    // setTabsId(id);
    setTabsIndex(index);
  };

  return {tabsId, tabsIndex, missedClasses, genres, handleMissedComponentTabs};
};

export default useMissedClassesComponentController;
