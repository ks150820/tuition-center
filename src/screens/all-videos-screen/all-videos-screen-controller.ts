import {useState, useEffect} from 'react';

const useAllVideosScreenController = (): IUseAllVideosScreenControllerReturnType => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [courseData, setCourseData] = useState<IVideosDetails[]>([]);

    const videos: IVideosDetails[] = [
        {
            heading: 'Quantative Aptitude',
            imageUrl : '',
            batchName: 'Bank demo class',
            teacherName: 'Abhishek Banerjee',
            status: 'Live',
            tabId: 'live',
            totalStudentsLive: 324,
            isLive: true,
            isUpcoming: false,
        },
        {
            heading: 'Quantative Aptitude',
            imageUrl : '',
            batchName: 'Bank demo class',
            teacherName: 'Abhishek Banerjee',
            status: 'Upcoming',
            tabId: 'upcoming',
            scheduleTime: '6:00 PM - 1st Nov',
            isLive: false,
            isUpcoming: true,
        },
        {
            heading: 'Quantative Aptitude',
            imageUrl : '',
            batchName: 'Bank demo class',
            teacherName: 'Abhishek Banerjee',
            status: 'Recorded',
            recordedOn: '25th Jul’21',
            tabId: 'missed',
            isLive: false,
            isUpcoming: false,
        },
        {
            heading: 'Quantative Aptitude',
            imageUrl : '',
            batchName: 'Bank demo class',
            teacherName: 'Abhishek Banerjee',
            status: 'Live',
            tabId: 'live',
            totalStudentsLive: 324,
            isLive: true,
            isUpcoming: false,
        },
        {
            heading: 'Quantative Aptitude',
            imageUrl : '',
            batchName: 'Bank demo class',
            teacherName: 'Abhishek Banerjee',
            status: 'Upcoming',
            tabId: 'upcoming',
            scheduleTime: '6:00 PM - 1st Nov',
            isLive: false,
            isUpcoming: true,
        },
        {
            heading: 'Quantative Aptitude',
            imageUrl : '',
            batchName: 'Bank demo class',
            teacherName: 'Abhishek Banerjee',
            status: 'Recorded',
            recordedOn: '25th Jul’21',
            isLive: false,
            tabId: 'missed',
            isUpcoming: false,
        }
    ];

    const tabsData: ITabsItem[] = [
        {title: 'Live classes', id: 'live'},
        {title: 'Upcoming classes', id: 'upcoming'},
        {title: 'Missed classes', id: 'missed'},
      ];

    const handleTabs = (index: number) => {
        setTabIndex(index);
    }

    useEffect(() => {
        const getTabId = tabsData[tabIndex].id;

        const courseFilterData = videos.filter(item => item.tabId === getTabId);
        setCourseData(courseFilterData);
    }, [tabIndex])

    return {tabIndex, videos, tabsData, courseData, handleTabs};
}

export default useAllVideosScreenController;