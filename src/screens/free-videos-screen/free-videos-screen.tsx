import React from 'react';

import useFreeVideosScreenController from './free-videos-screen-controller';

import FreeVideosScreenView from './free-videos-screen-view';

const FreeVideosScreen: React.FC<IFreeVideoScreenProps> = ({}) => {
  const {dummyFreeVideosDashBoardData, handleLiveClassNavigation, handleNavigation} =
    useFreeVideosScreenController({});
  return (
    <FreeVideosScreenView
      handleNavigation={handleNavigation}
      handleLiveClassNavigation={handleLiveClassNavigation}
      dashBoardData={dummyFreeVideosDashBoardData}
    />
  );
};

export default FreeVideosScreen;
