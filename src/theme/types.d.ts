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
  | 'OTHERS'
  | 'DISCOUNT'
  | 'H'
  | 'HAMBURGER'
  | 'FONT_EIGHT'
  | 'FONT_THIRTEEN';
interface IFont {
  [key: string]: number;
}
