// import {Language} from '../../components/@types';

type emptyObject = {
  logs: Logs[];
};
interface listType {
  responseData: rootElementType;
  selectedSection: string;
  summary: Object;
  currentPage: number;
  totalTimeSpent: number;
}

interface specific_instructions {
  [language: string]: Language;
}

type updatingLanguageType = string;

interface TestInfo {
  questionIndex: number;
  totalQuestions: number;
}
interface SectionInfo {
  index: number;
}
interface testExperienceType {
  list: listType;
  testId: string;
  details: detailType;
  questions: questionsItemType[];
  filteredQuestions: Array;
  loading: boolean;
  lastFetch: string | null;
  test_language: Language;
  specific_instructions: specific_instructions;
  sectionInfo: SectionInfo;
  currentQuestionIdData: questionsItemType;
  questionId: string;
  testInfo: TestInfo;
  test_language: string;
  examStartTime: string | null;
}
interface bodyType {
  selected_option: string[];
  language: Language;
  time_spend: number;
  status: number | null;
}

interface optionsItemType {
  text: textType;
  feedback: feedbackType;
  _id: string;
  sort_by: number;
  is_feedback: boolean;
}

interface questionsItemType {
  text: questionTextType;
  _id: string;
  section: string;
  question_type: string;
  options: optionsItemType[];
  mark: number;
  negative_mark: number;
}
