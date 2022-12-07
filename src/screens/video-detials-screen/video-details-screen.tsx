import React from 'react';
import useVideoDetailsScreenController from './video-details-screen-controller';

import VideoDetailsScreenView from './video-details-screen-view';

const VideoDetailsScreen: React.FC<IVideoDetailsScreen> = ({}) => {
  const {
    courseData,
    TabsData,
    activeTab,
    courseClassSelect,
    handleOnCourseClassSelect,
    handleTabs,
  } = useVideoDetailsScreenController({});
  return (
    <VideoDetailsScreenView
      TabsData={TabsData}
      courseData={courseData}
      handleTabs={handleTabs}
      activeTab={activeTab}
      selectedClass={courseClassSelect}
      handleOnCourseClassSelect={(index: number) =>
        handleOnCourseClassSelect(index)
      }
    />
  );
};

export default VideoDetailsScreen;
