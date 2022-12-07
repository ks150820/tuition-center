// import {languages} from '../screens/test-experience/question-panel/answer-instructions/constants/answer-instruction-constants';

type Language = 'en' | 'hi';

type option = {
  feedback?: languages;
  is_feedback?: boolean;
  sort_by?: number;
  text: {en: string; hi: string};
  _id?: section;
};
interface Question {
  mark: number;
  negative_mark: number;
  options: option[];
  question_type: string;
  section: string;
  text: Language;
  _id: string;
}

interface Section {
  is_time_bound: boolean;
  questions: Question[];
  sectionTimeFinished: boolean;
  sectionTimeSpent: 0;
  section_code: '';
  section_name: {en: ''; hi: ' '};
  section_name1: '';
  section_time: 0;
  _id: '';
}

interface CourseCardProps {
  cardFor: string;
  imageUrl: ImageSourcePropType;
  heading: string;
  batchName?: string;
  actualPrice?: number;
  discountedPrice?: number;
  discountPercent?: number;
  batchStartDate?: string;
  style?: object;
  children?: any;
  buttonText: string;
  viewPdfButton: boolean;
  onPress(): void;
  imageStyle?: viewStyle;
}
