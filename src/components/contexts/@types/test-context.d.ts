interface contextType {
  toggleInfoButton: () => void;
  infoButton: boolean;
  isVisible: boolean;
  flatListRefForQuestionTab: React.RefObject<FlatList<any>>;
  flatListRefForSections: React.RefObject<FlatList<any>>;
  questionIndex: number;
  pauseTimer: boolean;
  sectionQuestions: Object;
  timeUp: boolean;
  setQuestionNo: (index: number) => void;
  saveNext: () => void;
  toggleBottomSheet: () => void;
  setQuestionIndex: (index: number) => void;
  scrollToIndex: () => void;
  getStatusClass: (id: string) => statusObject;
  handleMarkAndReview: () => void;
  clearCurrentAnswer: () => void;
  setTimeUp: (value: boolean) => void;
}
