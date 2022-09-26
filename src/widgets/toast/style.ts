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
  header: {fontWeight: 'bold', fontSize: 15, color: '#000'},
  message: {fontSize: 12, color: '#000'},
  errorHeader: {fontWeight: 'bold', fontSize: 15, color: 'red'},
  errorMessage: {fontSize: 12, color: 'red'},
});
export default styles;
