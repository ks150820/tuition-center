type ImageSourcePropType = import('react-native').ImageSourcePropType;

interface IVideoDetailsScreenViewProps {
  readonly courseData: CourseDetailType[];
  readonly TabsData: TabsItemType[],
  readonly activeTab: number;
  handleTabs(index: number): void;
  selectedClass: number | null;
  handleOnCourseClassSelect(index: number): void;
  isBottomSheetVisible: boolean;
  toggleBottomSheet(): void;
  bottomSheetDetail: any;
  readonly courseDescription: ICourseDescription[];
  handleToCourseDetails(details: CourseDetailType): void;
}

interface IVideoDetailsScreen {}

interface IUseVideoDetailsScreenController {}
interface IUseVideoDetailsScreenControllerReturnTypes {
  courseData: CourseDetailType[];
  TabsData: TabsItemType[];
  courseClassSelect: number | null;
  isBottomSheetVisible: boolean;
  readonly activeTab: number;
  readonly courseDescription: ICourseDescription[];
  toggleBottomSheet(): void;
  handleTabs(index: number): void;
  handleOnCourseClassSelect(index: number): void;
  handleToCourseDetails(details: CourseDetailType): void;
  bottomSheetDetail: any;
}

interface CourseDetailType {
  _id: string;
  heading: string;
  batchName: string;
  teacherName: string;
  startDate: string;
  duration: string;
  discountedPrice: number;
  actualPrice: number;
  imageUrl: ImageSourcePropType;
  readonly isActive: boolean;
  readonly isLive: boolean;
  readonly status: string;
  readonly isUpcoming: boolean;

}

type TabsItemType = {
    id: string,
    title: string,
}

type bottomSheetDetailType = {
  duration: string;
  startDate: string;
}

interface IVideoDetailBottomSheetProps {
  isVisible: boolean;
  toggleBottomSheet(): void;
  courseDescription: ICourseDescription[];
  bottomSheetDetail: any;
}

type ICourseDescription = {
  numbers: string,
  tag: string,
}

interface IVideoDetailFooterComponentProps {
  discountedPrice: number;
  actualPrice: number;
}