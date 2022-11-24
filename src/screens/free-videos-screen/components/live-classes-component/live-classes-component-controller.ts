import {useState} from 'react';

const useLiveClassesComponentController = () => {
  const [tabId, setTabId] = useState<string>('1');
  const [categoriesTabId, setCategoriesTabId] = useState<string>('1');

//   add the dummy apis to the functionality
  const dummy_data = [
    {id: '1', title: 'Live Classes'},
    {id: '2', title: 'Upcoming Classes (9)'},
  ];

  const categories_data = [
    {id: '1', title: 'All'},
    {id: '2', title: 'English'},
    {id: '3', title: 'Maths'},
    {id: '4', title: 'Science'},
    {id: '5', title: 'History'},
    {id: '5', title: 'History'},
    {id: '5', title: 'History'},
  ];

  const handleTabs = (id: string) => {
    setTabId(id);
  };

  const handleCategoriesTabs = (id: string) => {
    setCategoriesTabId(id);
  }

  return {tabId, dummy_data, categoriesTabId, categories_data, handleTabs, handleCategoriesTabs};
};

export default useLiveClassesComponentController;
