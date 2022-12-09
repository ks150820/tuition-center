interface IAllVideosScreenViewProps {
    tabIndex: number;
    handleTabs(index: number): void;
    videos: IVideosDetails[];
    tabsData: ITabsItem[];
    courseData:  IVideosDetails[];
}

type IVideosDetails = {
    heading: string,
    imageUrl: string,
    batchName: string,
    teacherName: string,
    status: string,
    isLive: boolean,
    isUpcoming: boolean,
    tabId: string,
    scheduleTime?: string,
    recordedOn?: string,
    totalStudentsLive?: number,
}

type ITabsItem = {
    title: string;
    id: string;
}

interface IUseAllVideosScreenControllerReturnType {
    tabIndex: number;
    videos: IVideosDetails[];
    tabsData: ITabsItem[];
    courseData:  IVideosDetails[];
    handleTabs(index: number): void;
}