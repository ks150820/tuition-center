type IconType =
  | 'feather'
  | 'fontAwesomeFive'
  | 'ionicon'
  | 'material'
  | 'materialCommunity'
  | 'materialIcons'
  | 'octicons';

type IIconType = {
  [key in IconType]: string;
};

export const ICON_TYPES: IIconType = {
  feather: 'feather',
  fontAwesomeFive: 'font-awesome-5',
  ionicon: 'ionicon',
  material: 'material',
  materialCommunity: 'material-community',
  materialIcons: 'MaterialIcons',
  octicons: 'octicons',
};
