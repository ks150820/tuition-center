type OnPressType = () => void;

interface IUIButton {
  isChecked: boolean;
  onPress: OnPressType;
}
