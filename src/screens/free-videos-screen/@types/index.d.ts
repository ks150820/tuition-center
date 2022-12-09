interface IFreeVideoScreenProps {}

interface IUseFreeVideosScreenController {}

interface IPopularSeriesComponentViewProps {
  readonly data: PopularSeries[];
  onCardPress: any;
}

interface IMissedClassesComponentProps {}

interface IMissedClassesComponentView {
  tabID: string;
  readonly missedClasses: MissedLiveClasses[];
  readonly genres: Genres[];
  tabsIndex: number;
  onChangeTabs(index: number): void;
}

interface ILiveClassesComponentProps {
  handleViewAll(): void;
}

interface ILiveClassesComponentViewProps {
  tabId: string;
  data: any;
  tabIndex: number;
  categoriesTabIndex: number;
  readonly genres: Genres[];
  readonly liveClasses: LiveClasses[];
  categoriesTabId: string;
  handleCategoriesTabs(index: number): void;
  handleTabs(index: number): void;
  handleOnPressCard(): void;
  handleViewAll(): void;
}

interface FreeVideoDummyDataType {
  readonly id: number;
  readonly type: string;
}
interface IFreeVideosScreenViewProps {
  dashBoardData: FreeVideoDummyDataType[];
  handleNavigation(): void;
  handleLiveClassNavigation(): void;
}
