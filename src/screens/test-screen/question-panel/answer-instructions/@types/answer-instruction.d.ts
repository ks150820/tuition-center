interface handleOptionsType {
  name: string;
  id: optionType;
}

interface status_type {
  bgColor?: string;
  textColor?: string;
}

interface statusTitleNumber {
  text: string;
  number: number;
}
interface IAnswerStatus extends status_type, statusTitleNumber {}

interface custom_styles_for_status {
  [value: string]: status_type;
}

interface Constants {
  [value: string]: string;
}
