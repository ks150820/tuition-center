import {StyleSheet} from 'react-native';

import {COLORS} from '@resources/colors';

export const styles = StyleSheet.create({
  dropdownComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 5,
  },
  textColor: {
    color: COLORS.WHITE.white,
  },
  icon: {
    marginLeft: 7,
  },
  listHeaderComponent: {
    marginBottom: 5,
  },
  bottomSheetComponent: {
    padding: 15,
  },
  flatListHeaderText: {
    fontSize: 23,
    color: COLORS.GREY.davys_grey,
    fontWeight: '500',
    marginLeft: 9.5,
  },
  renderItemIcon: {
    fontSize: 15,
    color: COLORS.RED.indian_red,
  },
  flatListHeaderIcon: {
    textAlign: 'center',
  },
  renderItemComponent: {
    padding: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: COLORS.GREY.philippine_grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  renderItemTitleText: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.GREY.davys_grey,
  },
  renderItemSubText: {
    fontSize: 10,
    color: COLORS.GREY.philippine_grey,
  },
});
