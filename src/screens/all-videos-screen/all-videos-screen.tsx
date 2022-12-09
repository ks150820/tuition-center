import React from 'react';
import useAllVideosScreenController from './all-videos-screen-controller';

import AllVideosScreenView from './all-videos-screen-view';

const AllVideosScreen: React.FC<{}> = () => {
  const {tabIndex, videos, tabsData, courseData, handleTabs} = useAllVideosScreenController();
  return (
    <AllVideosScreenView
      tabIndex={tabIndex}
      handleTabs={(index: number) => handleTabs(index)}
      videos={videos}
      tabsData={tabsData}
      courseData={courseData}
    />
  );
};

export default AllVideosScreen;
