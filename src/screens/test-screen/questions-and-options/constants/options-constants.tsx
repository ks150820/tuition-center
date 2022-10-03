type optionLabel = 'A' | 'B' | 'C' | 'D';

type optionIndexType = {
  readonly [key: string]: number;
};
export const OPTION_INDEX: optionIndexType = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
};

export const OPTIONS_LABEL: optionLabel[] = ['A', 'B', 'C', 'D'];
