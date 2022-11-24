import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  component: {
    padding: 15,
  },
  inner_component: {
    borderWidth: 0.5,
    padding: 0,
    borderColor: colors.primary.cardinal,
    elevation: 0,
  },
  heading_text: {
    fontWeight: '700',
  },
  heading_card_component: {
    padding: 15,
  },
  viewAll_component: {
    backgroundColor: colors.gray_scale.white,
    padding: 8,
    borderTopWidth: 0.8,
    borderTopColor: colors.gray_scale.gallery,
  },
  viewAll_Text: {
    fontWeight: '700',
  },
  activeTabStyle: {
    paddingVertical: 2,
    backgroundColor: colors.primary.cardinal,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 12,
  },
  inActiveTabStyle: {
    padding: 2,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: colors.gray_scale.silver,
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 1,
  },
  outer_tabs_component: {marginVertical: 15},
  tabsComponentStyle: {
    backgroundColor: colors.gray_scale.white,
    borderWidth: 0,
  },
  cards_component: {
    padding: 0,
    elevation: 0,
    width: 160,
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
  },
  cards_image: {width: '100%', height: 105, elevation: 0},
  cards_intro_component: {padding: 10},
});
