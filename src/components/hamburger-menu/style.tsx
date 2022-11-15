import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  border: {borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.05)'},
  slideMenuItemContainer: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slideMenuLabel: {paddingStart: 12},
  expandableViewContainer: {paddingTop: 12, paddingBottom: 12},
  expandableViewHeaderContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  expandableViewChildContainer: {
    paddingStart: 48,
  },
  alignCenter: {
    alignItems: 'center',
  },
  sideMenuContainer: {
    height: '100%',
    width: '80%',
    backgroundColor: 'white',
    margin: 0,
  },
});
export default styles;
