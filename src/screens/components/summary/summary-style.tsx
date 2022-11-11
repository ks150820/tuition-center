import {StyleSheet} from 'react-native';
import {COLORS} from '@resources/colors';

export const summaryStyle = StyleSheet.create({
  component: {
    padding: 5,
  },
  headerComponent: {
    padding: 8,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 16,
    color: COLORS.GREY.davys_grey,
  },
  headerSubheading: {
    fontSize: 12,
    color: COLORS.GREY.davys_grey,
    marginTop: 3,
  },
  icon: {
    textAlign: 'center',
  },
  renderItemComponent: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  renderItemTitleText: {
    color: COLORS.GREY.davys_grey,
    fontSize: 14,
  },
  renderItemNumberComponent: {
    padding: 5,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: COLORS.GREY.american_silver,
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderItemNumberText: {
    color: COLORS.GREY.davys_grey,
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.WHITE.anti_flash_white,
    marginTop: 10,
  },
  btn: {
    backgroundColor: COLORS.WHITE.white,
    borderColor: COLORS.RED.venetian_red,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btnText: {
    color: COLORS.RED.venetian_red,
  },
  footerComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    padding: 10,
  },
  timerComponent: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerIcon: {
    color: COLORS.RED.venetian_red,
    fontSize: 30,
  },
  timerText: {
    color: COLORS.RED.venetian_red,
  },
});
