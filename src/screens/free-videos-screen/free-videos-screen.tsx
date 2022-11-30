import React from 'react';

import useFreeVideosScreenController from './free-videos-screen-controller';

import FreeVideosScreenView from './free-videos-screen-view';

const FreeVideosScreen = ({navigation}: IFreeVideoScreenProps) => {
  const {dummyFreeVideosDashBoardData, handleNavigation} = useFreeVideosScreenController({navigation});
  return <FreeVideosScreenView handleNavigation={handleNavigation} dashBoardData={dummyFreeVideosDashBoardData} />;
};

export default FreeVideosScreen;
