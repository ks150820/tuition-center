import React from 'react';

import useFreeVideosScreenController from './free-videos-screen-controller';

import FreeVideosScreenView from './free-videos-screen-view';

const FreeVideosScreen = () => {
  const {dummyFreeVideosDashBoardData} = useFreeVideosScreenController();
  return <FreeVideosScreenView dashBoardData={dummyFreeVideosDashBoardData} />;
};

export default FreeVideosScreen;
