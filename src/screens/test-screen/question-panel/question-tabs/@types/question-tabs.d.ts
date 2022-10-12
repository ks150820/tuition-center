interface questions {
  _id: string;
}

interface QuestionsStatusType {
  [id: string]: {colorCode: string; status: number};
}

interface statusObject {
  colorCode: string;
  status: number;
}

type emptyParameterType = () => void;
type methodWithIndexParameter = (index: number) => void;
type methodWithQuestionIdParameter = (questionId: string) => void;
type methodWithIdParameter = (id: string) => statusObject;
interface IQuestionTabsViewProps {
  questions: questions[];
  setQuestionIndex: methodWithIndexParameter;
  scrollToIndex: emptyParameterType;
  flatListRefForQuestionTab?: React.RefObject<FlatList<any>>;
  flatListRefForSections?: React.RefObject<FlatList<any>>;
  setQuestionNo: methodWithIndexParameter;
  handleQuestion: methodWithQuestionIdParameter;
  toggleInfoButton: emptyParameterType;
  getStatusClass: methodWithIdParameter;
}

interface optionsList {
  text: {
    en: string;
    hi: string;
  };
}
interface optionType {
  optionType: string;
  options: optionsList[];
  inputValue: string;
  preSelectedMcq: number;
  language: Language;
  onOptionSelected: () => void;
  onNumberPadClick: (e: string) => void;
}

interface IUseQuestionTabsViewControllerReturnType {
  sectionQuestions: Object;
  sectionTabIndex: number;
  questionIndex: number;
  flatListRefForQuestionTab: React.RefObject<FlatList<any>>;
  flatListRefForSections: React.RefObject<FlatList<any>>;
  toggleInfoButton: emptyParameterType;
  scrollToIndex: emptyParameterType;
  handleQuestion: methodWithQuestionIdParameter;
  setQuestionIndex: methodWithIndexParameter;
  getStatusClass: methodWithIdParameter;
  setQuestionNo: methodWithIndexParameter;
}

type IUseQuestionTabsViewController =
  () => IUseQuestionTabsViewControllerReturnType;
