import {COLORS} from '@resources/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  modalView: {
    width: '100%',
    backgroundColor: COLORS.WHITE.white,
    padding: 10,
    paddingBottom: 20,
    borderRadius: 10,
  },
  modalBottomSheetComponent: {
    padding: 0,
    margin: 0,
    height: 0,
  },
  modalViewBottomSheetChildrenComponent: {
    width: '100%',
    backgroundColor: COLORS.WHITE.white,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  iconComponent: {
    padding: 5,
    backgroundColor: COLORS.GREY.bright_gray,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  closeIcon: {
    fontSize: 15,
    color: COLORS.GREY.davys_grey,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    shadowRadius: 1,
    borderWidth: 0.1,
    marginTop: 5,
  },
  innerListItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderItemImage: {width: 35, height: 35, borderRadius: 100},
  renderItemText: {color: '#000', marginLeft: 10},
  listsComponent: {
    marginTop: 10,
  },
});
