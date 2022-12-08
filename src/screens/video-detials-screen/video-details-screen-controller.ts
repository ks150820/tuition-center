import {useState} from 'react';

const useVideoDetailsScreenController =
  ({}: IUseVideoDetailsScreenController): IUseVideoDetailsScreenControllerReturnTypes => {
    const [activeTab, setActiveTab] = useState<number>(1);
    const [courseClassSelect, setCourseCardSelect] = useState<number | null>(
      null,
    );
    const [isBottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);
    const [bottomSheetDetail, setBottomSheetDetail] = useState({});

    const courseData: CourseDetailType[] = [
      {
        _id: '1efr34',
        heading: 'Quantative Aptitude',
        batchName: 'ABHIMANYU BATCH',
        teacherName: 'Abhishek Banerjee',
        isActive: true,
        isLive: false,
        status: 'Upcoming',
        startDate: '29 October’22',
        duration: '6 Months',
        discountedPrice: 1999,
        actualPrice: 2000,
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
        startDate: '29 October’22',
        duration: '5 Months',
        status: 'Recorded',
        discountedPrice: 1999,
        actualPrice: 2000,
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
        startDate: '29 October’22',
        duration: '5 Months',
        status: 'Live',
        discountedPrice: 1999,
        actualPrice: 2000,
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
        startDate: '29 October’22',
        duration: '4 Months',
        status: 'Recorded',
        discountedPrice: 1999,
        actualPrice: 2000,
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
        startDate: '29 October’22',
        duration: '3 Months',
        status: 'Live',
        discountedPrice: 1999,
        actualPrice: 2000,
        isUpcoming: false,
        imageUrl: require('@assets/images/live-banner.jpg'),
      },
    ];

    const TabsData: TabsItemType[] = [
      {id: 'chat', title: 'Chat'},
      {id: 'playlist', title: 'Playlist'},
    ];

    const courseDescription: ICourseDescription[] = [
      {
        numbers: '500+',
        tag: 'Interactive videos',
      },
      {
        numbers: '1:1',
        tag: 'Mentorship',
      },
      {
        numbers: '200+',
        tag: 'Detailed Chapters',
      },
      {
        numbers: 'Personalized',
        tag: 'Study Plan',
      },
      {
        numbers: '200+',
        tag: 'Daily Live sessions',
      },
    ];

    const handleTabs = (index: number): void => {
      setActiveTab(index);
    };

    const handleOnCourseClassSelect = (index: number) => {
      setCourseCardSelect(index);
    };

    const toggleBottomSheet = (): void => {
      setBottomSheetVisible(!isBottomSheetVisible);
    }

    const handleToCourseDetails = (details: CourseDetailType): void => {
      setBottomSheetDetail(details);
      setBottomSheetVisible(!isBottomSheetVisible);
    }

    return {
      courseData,
      TabsData,
      activeTab,
      courseClassSelect,
      isBottomSheetVisible,
      courseDescription,
      bottomSheetDetail,
      toggleBottomSheet,
      handleTabs,
      handleOnCourseClassSelect,
      handleToCourseDetails,
    };
  };

export default useVideoDetailsScreenController;
