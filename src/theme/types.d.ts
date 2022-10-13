type IFontType = {
  [key in FontType]: IFontTypeProp;
};
type IFontTypeProp = {fontFamily: string; fontSize: number};
type FontType =
  | 'H1'
  | 'HEADING'
  | 'SUBHEADING'
  | 'PARAGRAPH'
  | 'INFO'
  | 'BUTTON'
  | 'OTHERS';
interface IFont {
  [key: string]: number;
}
