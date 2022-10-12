import {COLORS} from '@resources/colors';

export const languages: optionNames[] = [
  {name: 'English', id: 'en'},
  {name: 'Hindi', id: 'hi'},
];

export const TOTAL_QUESTIONS = 'Total Questions';

export const CONSTANTS: Constants = {
  TXT_ANSWERED: 'Answered',
  TXT_NOT_ANSWERED: 'Not Answered',
  TXT_NOT_VISITED: 'Not Visited',
  TXT_MARKED_FOR_REVIEW: 'Marked for review',
  TXT_ANSWERED_MARKED: 'Answered & Marked for review',
  TXT_TOTAL_QUESTIONS: 'Total Questions',
  TXT_MULTIPLE_CHOICE: 'Multiple Choice Questions',
  TXT_MULTIPLE_SELECTION: 'Multiple Selection Questions',
  TXT_NUMERICAL: 'Numerical',
};

export const BACKGROUND_TEXT_COLORS: custom_styles_for_status = {
  ANSWERED: {
    bgColor: COLORS.GREEN.russian_green,
    textColor: COLORS.WHITE.white,
  },
  NOT_ANSWERED: {
    bgColor: COLORS.RED.cedar_chest,
    textColor: COLORS.WHITE.white,
  },
  NOT_VISITED: {
    bgColor: COLORS.WHITE.white,
    textColor: COLORS.BLACK,
  },
  MARKED_ANSWER_MARKED_FOR_REVIEW: {
    bgColor: COLORS.ROYAL_PURPLE,
    textColor: COLORS.WHITE.white,
  },
};
