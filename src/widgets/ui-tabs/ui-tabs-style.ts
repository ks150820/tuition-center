import {StyleSheet} from 'react-native';

export const tabsStyles = StyleSheet.create({
  ButtonTabsComponent: {
    padding: 0,
    elevation: 0,
    backgroundColor: '#EDEDED',
    borderWidth: 0.4,
    borderRadius: 10,
    borderColor: '#E0DACB',
  },
  commonStyleBooksTextButton: {
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    fontWeight: '700',
  },
  inActiveButtonText: {justifyContent: 'center', padding: 8},
  scrollViewComponent: {
    flexGrow: 1,
    display: 'flex',
  },
  activeBooksTextButton: {
    borderWidth: 0.4,
    borderColor: '#E0DACB',
    backgroundColor: '#fff',
  },
  renderItemComponentStyle: {
    flex: 0.5,
  },
});
