import {useState} from 'react';

const useVideoDetailsScreenController =
  ({}: IUseVideoDetailsScreenController): IUseVideoDetailsScreenControllerReturnTypes => {
    const [activeTab, setActiveTab] = useState<number>(1);
    const [courseClassSelect, setCourseCardSelect] = useState<number | null>(
      null,
    );

    const courseData: CourseDetailType[] = [
      {
        _id: '1efr34',
        heading: 'Quantative Aptitude',
        batchName: 'ABHIMANYU BATCH',
        teacherName: 'Abhishek Banerjee',
        isActive: true,
        isLive: false,
        status: 'Upcoming',
        isUpcoming: true,
        imageUrl: require('@assets/images/live-banner.jpg'),
      },
      {
        _id: '1ef34',
        heading: 'Quantative Aptitude',
        batchName: 'ABHIMANYU BATCH',
        teacherName: 'Abhishek Banerjee',
        isActive: true,
        isLive: false,
        status: 'Recorded',
        isUpcoming: false,
        imageUrl: require('@assets/images/live-banner.jpg'),
      },
      {
        _id: '1efrr34',
        heading: 'Quantative Aptitude',
        batchName: 'ABHIMANYU BATCH',
        teacherName: 'Abhishek Banerjee',
        isActive: true,
        isLive: true,
        status: 'Live',
        isUpcoming: false,
        imageUrl: require('@assets/images/live-banner.jpg'),
      },
      {
        _id: '1ef34',
        heading: 'Quantative Aptitude',
        batchName: 'ABHIMANYU BATCH',
        teacherName: 'Abhishek Banerjee',
        isActive: false,
        isLive: false,
        status: 'Recorded',
        isUpcoming: false,
        imageUrl: require('@assets/images/live-banner.jpg'),
      },
      {
        _id: '1efrr34',
        heading: 'Quantative Aptitude',
        batchName: 'ABHIMANYU BATCH',
        teacherName: 'Abhishek Banerjee',
        isActive: false,
        isLive: false,
        status: 'Live',
        isUpcoming: false,
        imageUrl: require('@assets/images/live-banner.jpg'),
      },
    ];

    const TabsData: TabsItemType[] = [
      {id: 'chat', title: 'Chat'},
      {id: 'playlist', title: 'Playlist'},
    ];

    const handleTabs = (index: number): void => {
      setActiveTab(index);
    };

    const handleOnCourseClassSelect = (index: number) => {
      setCourseCardSelect(index);
    };
    return {
      courseData,
      TabsData,
      activeTab,
      courseClassSelect,
      handleTabs,
      handleOnCourseClassSelect,
    };
  };

export default useVideoDetailsScreenController;
