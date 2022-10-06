import {StyleSheet} from 'react-native';
import {COLORS} from 'resources/colors';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderRadius: 10,
    position: 'relative',
    alignSelf: 'center',
    padding: 20,
  },
  actionContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  buttonFilled: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 10,
  },
  buttonOutlined: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    marginRight: 30,
  },
});
