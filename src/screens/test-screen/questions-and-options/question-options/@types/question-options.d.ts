type option = {
  feedback?: languages;
  is_feedback?: boolean;
  sort_by?: number;
  text: textType;
  _id?: section;
};

type optionsSelectedType = (index: number) => void;
type numberPadClickType = (num: string) => void;

interface IQuestionOptionProps {
  options: option[];
  optionType?: String;
  preSelectedMcq: number;
  inputValue: string;
  language: Language;
  onOptionSelected: optionsSelectedType;
  onChangeText: numberPadClickType;
}

type selectOptionType = Array | string[] | {max: ''};
type Log = {
  language: string;
  selected_option: selectOptionType;
  status: number | null;
  test_question: string;
  time_spend: number;
  _id: string;
};

interface UseOptionsControllerReturn {
  options: option[];
  optionType: String;
  preSelectedMcq: number;
  inputValue: string;
  isOptions: [] | string[];
  selectedLanguage: Language;
  handleOptions: (index: number) => void;
  onOptionSelected: optionsSelectedType;
  onChangeText: numberPadClickType;
}
