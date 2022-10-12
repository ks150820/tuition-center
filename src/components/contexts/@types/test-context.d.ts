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

interface feedContextType {
  openModal: () => void;
  toggleState: boolean;
  handleDontAskAgain: () => void;
  closeModal: () => void;
  setDontAskCondtionOnAsyncStore: () => void;
}

interface feedbackContextProvider {
  children: any;
}
interface liveChatContext {
  chatInput: (textEvent: string) => void;
  sendMessage: () => void;
  handlePagination: () => void;
  isLoading: boolean;
  message: string;
  messageResponse: any;
  userId: string;
}
