import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  booksComponent: {
    padding: 0,
    paddingBottom: 5,
    width: 125,
    elevation: 0,
    borderRadius: 0,
  },
  booksImage: {width: 125, height: 150, borderRadius: 8},
  booksCardTitle: {
    lineHeight: 18,
    fontWeight: '600',
  },
  booksTitleView: {
    marginTop: 15,
  },
  booksViewPrice: {
    fontWeight: '400',
    color: colors.accent.solid_black,
  },
  booksPriceComponent: {
    marginVertical: 3,
  },
  booksBuyButton: {
    marginTop: 10,
  },
  buy_button: {
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: colors.primary.cardinal,
    borderRadius: 5,
    padding: 5,
  },
});
