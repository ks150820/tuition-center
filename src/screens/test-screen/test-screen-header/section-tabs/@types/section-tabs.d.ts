interface ISectionTabProps {}
interface sections {
  is_time_bound: boolean;
  questions: Question[];
  sectionTimeFinished: boolean;
  sectionTimeSpent: number;
  section_code: string;
  section_name: {en: string; hi: string};
  section_name1: string;
  section_time: number;
  _id: string;
}

type onPressType = () => void;
interface headerTopProps {
  sections: sections[];
  index?: number;
  onPress: onPressType;
}

interface headerBottomSheetProps {
  sections: sections[];
  selectedSection: string;
  onPress: onPressType;
  sectionIndex?: number;
  onSelectSection: (secName: string, index: number) => void;
}

type handleSectionPressType = (
  selectedSectionName: String,
  index: number,
) => void;
interface ISectionTabViewProps {
  sections: sections[];
  isBottomSheetVisible: boolean;
  sectionIndex?: number;
  sectionName: string;
  handleSectionPress: handleSectionPressType;
  toggleBottomSheet: onPressType;
}
