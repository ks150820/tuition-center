import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  toastContainer: {
    width: '95%',
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 6,
    elevation: 4,
    padding: 12,
  },
  toastRow: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  toastText: {
    width: '90%',
    padding: 2,
  },
});
export default styles;
