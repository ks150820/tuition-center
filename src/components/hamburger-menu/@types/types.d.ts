type typeActions = {type: string; data: string; extra?: string};
type iconType = (props: SvgProps) => JSX.Element;
type childType = {
  title: string;
  Icon: iconType;
  actions: typeActions;
};
interface IMenuList {
  title: string;
  Icon: iconType;
  childrens: childType[];
  ExtraLabelView: ReactElement | null;
  actions?: typeActions;
}
