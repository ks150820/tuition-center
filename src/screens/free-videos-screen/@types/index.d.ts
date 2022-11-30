interface IFreeVideoScreenProps extends videoDetails {
  navigation: any;
}

interface IUseFreeVideosScreenController {
  navigation: any;
}

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

interface ILiveClassesComponentProps {}

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
}

interface FreeVideoDummyDataType {
  readonly id: number;
  readonly type: string;
}
