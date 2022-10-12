import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '90%',
    borderRadius: 4,
    padding: 12,
    elevation: 6,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 12,
  },
  header: {color: 'black', fontWeight: '600', fontSize: 16, marginBottom: 6},
  description: {
    color: '#333333',
    justifyContent: 'center',
    textAlign: 'center',
  },
  actionBtn: {
    padding: 16,
    backgroundColor: '#ED2E3D',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 12,
  },
});
export default styles;
