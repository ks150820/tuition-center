type ImageSourcePropType = import('react-native').ImageSourcePropType;

interface IVideoDetailsScreenViewProps {
  readonly courseData: CourseDetailType[];
  readonly TabsData: TabsItemType[],
  readonly activeTab: number;
  handleTabs(index: number): void;
  selectedClass: number | null;
  handleOnCourseClassSelect(index: number): void;
}

interface IVideoDetailsScreen {}

interface IUseVideoDetailsScreenController {}
interface IUseVideoDetailsScreenControllerReturnTypes {
  courseData: CourseDetailType[];
  TabsData: TabsItemType[];
  handleTabs(index: number): void;
  readonly activeTab: number;
  courseClassSelect: number | null;
  handleOnCourseClassSelect(index: number): void;
}

interface CourseDetailType {
  _id: string;
  heading: string;
  batchName: string;
  teacherName: string;
  readonly isActive: boolean;
  readonly isLive: boolean;
  readonly status: string;
  readonly isUpcoming: boolean;
  imageUrl: ImageSourcePropType;
}

type TabsItemType = {
    id: string,
    title: string,
}