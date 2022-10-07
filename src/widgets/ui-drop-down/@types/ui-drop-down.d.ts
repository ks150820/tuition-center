type ShowOptionType = () => void;
type handleOptionValueType = (value: optionNames) => void;
type childrenType = boolean | JSX.Element | JSX.Element[];
interface IDropdownViewComponent<T> extends React.FC<T> {
  UIDropdownView: React.FunctionComponent<IUIDropDownViewProps>;
  Options: React.FunctionComponent<IOptions>;
}

interface optionNames {
  name: string;
  id: string;
}

interface IUIDropDownViewProps {
  label?: string;
  children: childrenType;
  layoutStyle?: Object;
  dropDownStyle?: object;
  optionsValue: string;
  handleShowOptions: ShowOptionType;
}
interface IOptions {
  option: optionNames[];
  handleOptionValue: handleOptionValueType;
}
