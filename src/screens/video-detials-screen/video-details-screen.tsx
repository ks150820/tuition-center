import React from 'react';
import useVideoDetailsScreenController from './video-details-screen-controller';

import VideoDetailsScreenView from './video-details-screen-view';

const VideoDetailsScreen: React.FC<IVideoDetailsScreen> = ({}) => {
  const CONTROLLER = useVideoDetailsScreenController({});
  return (
    <VideoDetailsScreenView
      TabsData={CONTROLLER.TabsData}
      courseData={CONTROLLER.courseData}
      handleTabs={CONTROLLER.handleTabs}
      activeTab={CONTROLLER.activeTab}
      selectedClass={CONTROLLER.courseClassSelect}
      handleOnCourseClassSelect={(index: number) =>
        CONTROLLER.handleOnCourseClassSelect(index)
      }
      isBottomSheetVisible={CONTROLLER.isBottomSheetVisible}
      toggleBottomSheet={CONTROLLER.toggleBottomSheet}
      courseDescription={CONTROLLER.courseDescription}
      bottomSheetDetail={CONTROLLER.bottomSheetDetail}
      handleToCourseDetails={(details: CourseDetailType) => CONTROLLER.handleToCourseDetails(details)}
    />
  );
};

export default VideoDetailsScreen;
