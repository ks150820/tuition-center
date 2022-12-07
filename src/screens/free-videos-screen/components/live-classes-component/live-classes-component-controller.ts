import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {getAllLiveClasses, getAllGenres} from '@store/entities/free-videos';

const useLiveClassesComponentController = () => {
  const [tabId, setTabId] = useState<string>('1');
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [categoriesTabId, setCategoriesTabId] = useState<string>('');
  const [categoriesTabIndex, setCategoriesTabIndex] = useState<number>(0);
  const [liveClasses, setLiveClassesData] = useState<any>([]);

  const genres = useSelector(getAllGenres);
  const liveClassesData = useSelector(getAllLiveClasses);

  //   add the dummy apis to the functionality
  const dummy_data = [
    {id: '1', title: 'Live Classes'},
    {id: '2', title: 'Upcoming Classes (9)'},
  ];

  useEffect(() => {
    handleLiveClassesData();
  }, [categoriesTabIndex])

  useEffect(() => {
    setLiveClassesData(liveClassesData);
  }, [])

  const handleLiveClassesData = () => {
    const findGenericData = genres[categoriesTabIndex];
    const filterData = liveClassesData.filter((item: any) => item.category === findGenericData.genreCode);
    // console.log(filterData);
    setLiveClassesData(filterData);
    if(categoriesTabIndex === 0){
      setLiveClassesData(liveClassesData);
     }
  }

  const handleTabs = (index: number) => {
    // setTabId(index);
    setTabIndex(index);
  };

  const handleCategoriesTabs = (index: number) => {
    setCategoriesTabIndex(index);
  };

  const handleOnPressCard = (): void => {};

  return {
    tabId,
    tabIndex,
    categoriesTabIndex,
    dummy_data,
    categoriesTabId,
    genres,
    liveClasses,
    handleTabs,
    handleCategoriesTabs,
    handleOnPressCard,
  };
};

export default useLiveClassesComponentController;
